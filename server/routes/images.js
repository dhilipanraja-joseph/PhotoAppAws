const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const Image = require('../models/image');
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.get('/',(req,res)=>{
  Image.find({},(err,images)=>{
    res.status(err?400:200).send(err || images);
  });
});


router.post('/',upload.single('img'),(req,res)=>{

  //console.log("req.file",req.file);
  //res.send(req.file);
  Image.upload(req.file,(err,image)=>{

    res.status(err?400:200).send(err||image);

  });

  // let filename='lion.jpg';
  // let filepath=path.join(__dirname,'../../',filename);
  // fs.readFile(filepath,(err,buffer)=>{
  //   if (err ) return res.status(400).send(err);
  //   console.log('buffer',buffer);
  //   // res.send();
  // });
});

router.delete('/:id',(req,res)=>{
  //console.log("id:",req.params.id);
  //Image.remove({Key : req.params.id})
  Image.deleteAWS(req.params.id,(err,data)=>{
    res.status(err?400:200).send(err||data);
  });
});


module.exports = router;
