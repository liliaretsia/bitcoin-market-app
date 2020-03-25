import {connect} from 'react-redux'
import TradeButton from '../components/TradeButton'
import {setCurrentTrade} from "../actions/currentTrade"

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleCurrentTrade: (tradeId, event) => {
            dispatch(setCurrentTrade(tradeId))
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        trade: props.trade,
        currentTrade: state.currentTrade
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TradeButton)
