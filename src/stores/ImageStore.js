import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _images = [];

class ImageStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action=>{

      switch(action.type){
        case 'RECEIVE_IMGS' : _images = action.imgs;
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
}


export default new ImageStore()
