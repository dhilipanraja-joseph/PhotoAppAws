import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveImgs(imgs){
    AppDispatcher.dispatch({
      type: 'RECEIVE_IMGS',
      imgs
    })
  },
  uploadedImg(){
    AppDispatcher.dispatch({
      type: 'UPLOAD_SUCCESS',
    })
  }
}

export default ServerActions
