import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _images = [],_status;

class ImageStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action=>{

      switch(action.type){

        case 'RECEIVE_IMGS'   : _images = action.imgs;
                                this.emit('CHANGE');
                                break;

        case 'UPLOAD_SUCCESS' : _status = 'Image Uploaded';
                                this.emit('CHANGE');
                                break;
      }

    });

  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getUploadedImgs(){
    return _images;
  }

  getStatus(){
    return _status;
  }
}


export default new ImageStore()
