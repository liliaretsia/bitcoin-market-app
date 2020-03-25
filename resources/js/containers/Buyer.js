import {connect} from 'react-redux'
import Buyer from '../components/Buyer'

const mapStateToProps = state => ({
    trade: state.trades.result.length !== 0 ? state.trades.result.byId[state.currentTrade] : []
})

export default connect(
    mapStateToProps
)(Buyer)
