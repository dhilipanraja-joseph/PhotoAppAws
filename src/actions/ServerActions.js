import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveImgs(imgs){
    AppDispatcher.dispatch({
      type: 'RECEIVE_IMGS',
      imgs
    })
  }
}

export default ServerActions
