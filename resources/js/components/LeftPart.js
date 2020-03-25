import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Trades from "../components/Trades";

export default class LeftPart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.handleTrades();
    }

    render() {
        const trades = this.props.trades;

        return (<Trades trades={trades}/>)
    }
}
