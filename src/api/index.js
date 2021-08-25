import axios from 'axios'

export default axios.create({
  baseURL: 'http://10.0.2.2:4000/api', //should be somewhere in env config
})
