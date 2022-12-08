const axios = require('axios');
const getUserData = require('./getUserData')

export default function attemptLogin(user, setCookie){
  const username = user.username;
  const password = user.password;
  axios.post('http://127.0.0.1:8000/api/users/token/', { username: username, password: password })
  .then( response => {
    setCookie('user', response.data.access, {
      path: '/admin',
      maxAge: 24 * 3600,
    })
  })
}