import api from './index'

export default {
  get: () => api.get('/devices.json'),
}
