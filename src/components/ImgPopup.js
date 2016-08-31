import React , { Component } from 'react'
import UrlStore from '../stores/UrlStore'

export default class ImgPopup extends Component{
  constructor(){
    super();
    this.state={
      url : UrlStore.getUrl() 
    }
    this._onChange=this._onChange.bind(this);
  }

  componentDidMount(){
    UrlStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    UrlStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ url : UrlStore.getUrl() });
  }

  render(){
    // if(this.state.url){
      return(
        <div>
          <div>
            <img src={this.state.url} width="900px" alt='No Image'/>
          </div>
        </div>
      )
    // }else{
    //   return (
    //     <div>
    //
    //     </div>
    //   )
    // }

    // var imgPop = {
    //   visibility : 'hidden',
    // };
  }
}
