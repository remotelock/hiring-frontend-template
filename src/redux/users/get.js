import {createAsyncThunk} from '@reduxjs/toolkit'

import api from '../../api/users'

const action = createAsyncThunk('users/get', async () => {
  const {data} = await api.get()
  return data.data
})

export default action
