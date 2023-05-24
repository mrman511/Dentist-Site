import axios from 'axios';

export default function getTeam(setTeam){
  axios.get((process.env.NEXT_PUBLIC_BACKEND_PATH || 'http://127.0.0.1:8000/') + `api/profiles/`)
  .then(res => { 
    setTeam(res.data) 
  })
}