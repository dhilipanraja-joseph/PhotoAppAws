import AppDispatcher from '../AppDispatcher'

const ImgPopActions={
  showPopup(url){
    AppDispatcher.dispatch({
      type : 'RECEIVE_URL',
      url
    })
  }
}

export default ImgPopActions
