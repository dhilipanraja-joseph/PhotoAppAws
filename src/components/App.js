import React , {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component{
  render(){
    return (
      <div className="container">
        <Link to="/"><h1>PhotoAPP</h1></Link>
        <Link to="/upload">Upload Images</Link><span> </span>
        <Link to="/viewImages">Uploaded Images</Link>
        {this.props.children}
      </div>
    )
  }
}
