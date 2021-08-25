import {format, isAfter, isBefore} from 'date-fns'

export function makeCommonReducers(action) {
  return {
    [action.pending]: state => {
      state.request = 'pending'
      state.data = []
    },
    [action.rejected]: (state, action) => {
      state.request = 'rejected'
      state.data = []
      state.error = action.error.message
    },
    [action.fulfilled]: (state, {payload}) => {
      state.request = 'fulfilled'
      state.data = payload
      state.error = false
    },
  }
}

const DATE_FORMAT = 'LLL dd HH:mm'

export function calculateDateAndStatus(start, end) {
  const now = new Date()
  const sDate = new Date(start)
  const eDate = new Date(end)
  const date = format(sDate, DATE_FORMAT) + ' - ' + format(eDate, DATE_FORMAT)
  const status = isAfter(now, eDate)
    ? 'EXPIRED'
    : isBefore(now, sDate)
    ? 'UPCOMING'
    : 'ACTIVE'
  return {date, status}
}
