import api from './index'

export default {
  get: () => api.get('/users.json'),
}
