import React from 'react';

const TradeButton = (item) => {
    let trade = item.trade;
    return (
        <button className={trade.id === item.currentTrade ? 'trade-button active' : 'trade-button'}
                onClick={() => item.handleCurrentTrade(trade.id)}>more details
        </button>
    )
};

export default TradeButton;