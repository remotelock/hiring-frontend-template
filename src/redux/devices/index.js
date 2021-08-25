import {createSlice} from '@reduxjs/toolkit'
import {makeCommonReducers} from '../../utils'

import get from './get'

const slice = createSlice({
  name: 'devices',
  initialState: {
    request: '',
    data: [],
    error: false,
  },
  reducers: {
    toggleLock: (state, {payload}) => {
      state.data.find(d => d.id === payload.id).attributes.state = payload.state
    },
  },
  extraReducers: {
    ...makeCommonReducers(get),
  },
})

export const actions = {...slice.actions, get}

export default slice.reducer
