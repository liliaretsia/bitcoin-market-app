import {ADD_CURRENT_TRADE} from '../constants/actionTypes'

const initialState = null;

const currentTrade = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_TRADE:
            return action.id;
        default:
            return state;
    }
}

export default currentTrade
