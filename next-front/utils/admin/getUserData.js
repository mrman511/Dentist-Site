import axios from "axios";

export default function getUserData(cookie, setUserData, transiton){
  const config = { headers: {
    authorization: `Bearer ${cookie.user}`
  }}
  axios.get((process.env.NEXT_PUBLIC_BACKEND_PATH || 'http://127.0.0.1:8000/') + `api/user`, config)
  .then(res => {
    setUserData(res.data);
    transiton('SHOW');
  })
}