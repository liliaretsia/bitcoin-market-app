import {combineReducers} from 'redux'
import currentTrade from './currentTrade'
import trades from './trades'

const rootReducer = combineReducers({
    currentTrade,
    trades,
})

export default rootReducer
