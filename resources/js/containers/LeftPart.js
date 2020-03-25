import {connect} from 'react-redux'
import LeftPart from '../components/LeftPart'
import {getTradeList} from "../actions/trades"
import {setCurrentTrade} from "../actions/currentTrade";

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleTrades: () => dispatch(getTradeList()),
    }
}

const mapStateToProps = (state, props) => {
    return {
        trades: state.trades,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPart)
