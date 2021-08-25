import {configureStore} from '@reduxjs/toolkit'
import devices from '../redux/devices'
import users from '../redux/users'

const store = configureStore({
  reducer: {
    devices,
    users,
  },
})

export default store
