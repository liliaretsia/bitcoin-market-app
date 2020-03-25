import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import TradeButton from "../containers/TradeButton";

const Trades = ({trades}) => {
    if (trades.result.length === 0) {
        return (<p/>);
    }
    return (
        Object.values(trades.result.byId).map(trade => (
            <Card body key={trade.id}>
                <Row>{trade.buyer.first_name}</Row>
                <Row>
                    <Col>
                        <h5>
                            <Badge className="methodBadge" variant="secondary">{trade.payment_method}</Badge>
                        </h5>
                    </Col>
                    <Col xs={6}>
                        <Row className="flexEnd">{trade.amount}</Row>
                    </Col>
                    <Col className="flexEnd">
                        <Badge pill
                               variant={trade.status === 1 ? 'success' : 'danger'}>{trade.status === 1 ? 'paid' : 'unpaid'}
                        </Badge>{' '}
                    </Col>
                </Row>
                <Row><TradeButton trade={trade}/></Row>
            </Card>
        ))
    )
};

export default Trades;
