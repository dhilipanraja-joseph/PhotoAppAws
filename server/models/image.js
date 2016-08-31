const BUCKET_NAME = 'photo-app-bucket-dlip';
const AWS_URL_BASE = 'https://s3-us-west-1.amazonaws.com'
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const path = require('path');

const s3 = new AWS.S3();

const imageSchema = new mongoose.Schema({
  name:{type : String,required:true},
  url:{type :String,required:true},
  Key:{type:String,required:true},
  createdAt:{type:Date,default:Date.now}
});


imageSchema.statics.upload = function(fileObj,cb){
  let { originalname,buffer } = fileObj;
  let ext = path.extname(originalname);
  let Key = uuid()+ext;

  let params={
    Bucket: BUCKET_NAME,
    Key,
    ACL: 'public-read',
    Body: buffer
  };

  s3.putObject(params,(err,result)=>{
    if (err) return cb(err);

      let url = `${AWS_URL_BASE}/${BUCKET_NAME}/${Key}`;

      this.create({name: originalname,url,Key},cb);
    //cb(err,result);
  });
};


imageSchema.statics.deleteAWS = function(Key,cb){
  let params={
    Bucket: BUCKET_NAME,
    Key
  };

  s3.deleteObject(params,(err,data)=>{
    if (err) return cb(err);
    else {
      this.remove({Key},cb);
    }
  });
};


const Image = mongoose.model('Image',imageSchema);
module.exports = Image;
