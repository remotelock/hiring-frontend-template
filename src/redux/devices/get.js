import {createAsyncThunk} from '@reduxjs/toolkit'

import api from '../../api/devices'

const action = createAsyncThunk('devices/get', async () => {
  const {data} = await api.get()
  return data.data
})

export default action
