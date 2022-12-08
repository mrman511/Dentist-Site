import axios from "axios";

export default async function createService(formData, cookie, setServices){
  const config = { headers: {
    authorization: `Bearer ${cookie.user}`,
    'Content-Type': 'multipart/form-data'
  }}

  const res = await axios.post((process.env.NEXT_PUBLIC_BACKEND_PATH || 'http://127.0.0.1:8000/') + `api/services/create/`, formData, config);
  
  if (res){
    setServices(undefined);
  }
}