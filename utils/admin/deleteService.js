import axios from "axios";

export default async function deleteService(serviceId, cookie, setServices){
  const config = { headers: {
    authorization: `Bearer ${cookie.user}`
  }}
  const res = await axios.delete((process.env.NEXT_PUBLIC_BACKEND_PATH || 'http://127.0.0.1:8000/') + `api/service/${serviceId}/delete`, config);
  
  if (res){
    setServices(undefined);
  }
}