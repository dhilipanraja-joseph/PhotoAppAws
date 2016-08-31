import React , { Component } from 'react'
import FileUploader from './FileUploader'
import ImageStore from '../stores/ImageStore'

export default class UploadImg extends Component{
  constructor(){
    super();
    this.state={
      status: ''
    }
    this._onChange=this._onChange.bind(this);
  }
  componentDidMount(){
    ImageStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    ImageStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ status: ImageStore.getStatus() });
  }
  render(){
    return (
      <div>
        <FileUploader/>
        <p>
          {this.state.status}
        </p>
      </div>
    )
  }
}
