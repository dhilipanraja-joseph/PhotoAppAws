import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'


let _url;
class UrlStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action=>{

      switch(action.type){

        case 'RECEIVE_URL'   : _url = action.url;
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

  getUrl(){
    return _url;
  }
}



export default new UrlStore()
