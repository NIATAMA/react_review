import * as actionTypes from './action-types'

export const increment = (data) => ({ type: actionTypes.INCREMENT, data })
export const decrement = (data) => ({ type: actionTypes.DECREMENT, data })
