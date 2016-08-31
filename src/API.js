import axios from 'axios'
import ServerActions from './actions/ServerActions'
import UploadActions from './actions/UploadActions'


const API = {
  uploadImg(file){
    let data = new FormData();
    data.append('img',file);
    axios.post('/api/images',data)
          //.then(res=>res.data)
          .catch(console.error)
  },
  getAllImg(){
    axios.get('/api/images/')
          .then(res=>res.data)
          .then(ServerActions.receiveImgs)
          .catch(console.error)
  },
  deleteImage(key){
    axios.delete(`/api/images/${key}`)
          .then(res=>{
            UploadActions.getAllImg()
          })
          .catch(console.error)
  }
}

export default API
