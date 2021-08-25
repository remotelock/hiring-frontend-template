import {createSlice} from '@reduxjs/toolkit'
import {makeCommonReducers} from '../../utils'

import get from './get'

const slice = createSlice({
  name: 'users',
  initialState: {
    request: '',
    data: [],
    error: false,
  },
  reducers: {},
  extraReducers: {
    ...makeCommonReducers(get),
  },
})

export const actions = {...slice.actions, get}

export default slice.reducer
