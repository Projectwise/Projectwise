import axios from 'axios'

class API {
  constructor () {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/api'
    })
  }
  setAuthHeader (token) {
    this.axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  }
  removeAuthHeader () {
    delete this.axios.defaults.headers.common['Authorization']
  }
  signup (userDetails) {
    return this.axios.post('/signup', userDetails)
  }
  login (userDetails) {
    return this.axios.post('/login', userDetails)
  }
}

export default new API()