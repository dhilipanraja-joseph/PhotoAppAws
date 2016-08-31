import React , {Component} from 'react'
import UploadActions from '../actions/UploadActions'
import {browserHistory} from 'react-router'
export default class FileUploader extends Component {
  constructor(){
    super();

    this.state={
      file: '',
      imgpreURL:''
    };
    this._onInputChange=this._onInputChange.bind(this);
    this._onSubmit=this._onSubmit.bind(this);

  }

  _onSubmit(e){
    e.preventDefault();
    // console.log(this.state.file);
    UploadActions.uploadImg(this.state.file);
    // browserHistory.push('/viewImages');
    //this.props.submitFile(this.state.file);
  }

  _onInputChange(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    // console.log("e.target",e.target.files[0]);

    reader.onloadend=()=>{

      this.setState({
        file,
        imgpreURL : reader.result
      });

    };

    reader.readAsDataURL(file);
  }


  render(){

    let {imgpreURL} = this.state;
    let ImgPre = imgpreURL && <img width="250px" src={imgpreURL}/>
    return (
     <div>
       <form onSubmit={this._onSubmit}>
         <input type="file" name="" onChange={this._onInputChange}/><br/>
         <button type="submit">upload</button>
       </form><br/>
       {ImgPre}
     </div>
    )
  }
}
