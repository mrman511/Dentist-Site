import axios from "axios";

export default function getServices(setServices){
  axios.get((process.env.NEXT_PUBLIC_BACKEND_PATH || 'http://127.0.0.1:8000/') + `api/services/`)
  .then(res => { 
    console.log('RESPONSE FORM setServices')
    setServices(res.data) 
  })
}