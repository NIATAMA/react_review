// reducers 负责更新state的函数
import * as actionTypes from './action-types'

export function counter(state = 0, action) {
    // 判断action.type
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + action.data
        case actionTypes.DECREMENT:
            return state + action.data
        default:
            return state
    }
}
