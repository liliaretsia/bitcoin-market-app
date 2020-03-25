import {ADD_CURRENT_TRADE} from '../constants/actionTypes'

export const setCurrentTrade = (id) => ({
    type: ADD_CURRENT_TRADE,
    id
})
