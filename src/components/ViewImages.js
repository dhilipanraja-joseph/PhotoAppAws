import React , { Component } from 'react'
import ImageStore from '../stores/ImageStore'
import UploadActions from '../actions/UploadActions'

export default class ViewImages extends Component {
  constructor(){
    super();
      this.state={
        images : ImageStore.getUploadedImgs()
      }
      this._onChange=this._onChange.bind(this);
  }
  deleteImg(id){
    //console.log("key : ",id);
    UploadActions.deleteImage(id);
  }
  componentDidMount(){
    UploadActions.getAllImg();
    ImageStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    ImageStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ images : ImageStore.getUploadedImgs() });
  }
  render(){
    //.log("images:",this.state.images);
    let ImgTr = this.state.images.map(image=>{
      return (
        <tr key={image.Key}>
            <td>{image.name}</td>
            <td><img width="250px" src={image.url}/></td>
            <td><button onClick={this.deleteImg.bind(null,image.Key)}>Delete</button></td>
        </tr>
      )
    });
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {ImgTr}
          </tbody>
        </table>
      </div>
    )
  }
}
