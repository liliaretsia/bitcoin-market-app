import {
    TRADES_GET_REQUEST,
    TRADES_GET_SUCCESS,
    TRADES_GET_FAILURE
} from '../constants/actionTypes'

const initialState = {
    isFetching: false,
    result: [],
    isReceived: false
}

const trades = (state = initialState, action) => {
    switch (action.type) {
        case TRADES_GET_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isReceived: false,
            })
        case TRADES_GET_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isReceived: true,
                result: action.result
            })
        case TRADES_GET_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                result: null,
                error: action.message
            })

        default:
            return state
    }
}

export default trades
