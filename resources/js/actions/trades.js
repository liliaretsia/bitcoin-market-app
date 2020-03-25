import {
    TRADES_GET_REQUEST,
    TRADES_GET_SUCCESS,
    TRADES_GET_FAILURE
} from '../constants/actionTypes'

function requestTrades() {
    return {
        type: TRADES_GET_REQUEST,
        isFetching: true,
        isReceived: false,
    }
}

function tradesError(error) {
    return {
        type: TRADES_GET_FAILURE,
        isFetching: false,
        isReceived: false,
        message: error.message
    }
}

function formatData(items) {
    let formattedTrades = {
        byId: {}
    };
    if (items.length === 0) {
        return [];
    }
    items.forEach((trade) => {
        formattedTrades.byId[trade.id] = {
            id: trade.id,
            amount: trade.amount,
            rate: trade.rate,
            status: trade.status,
            payment_method: trade.payment_method.method,
            buyer: {
                first_name: trade.buyer.name,
                positive_reputation: trade.buyer.positive_reputation,
                negative_reputation: trade.buyer.negative_reputation,
            }
        }
    });
    return formattedTrades;
}

function receiveTrades(result) {
    return {
        type: TRADES_GET_SUCCESS,
        isFetching: false,
        isReceived: true,
        result: formatData(result)
    }
}

function fetchTrades() {
    let url = "api/data";
    let config = {
        method: 'GET'
    }

    return fetch(url, config).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Error! No trades!')
        }
    })
}

export function getTradeList() {
    return dispatch => {
        dispatch(requestTrades());
        return fetchTrades()
            .then(json => dispatch(receiveTrades(json)))
            .catch(error => dispatch(tradesError(error)))
    }
}
