import React from 'react';
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Buyer = ({trade}) => {
    if (trade === undefined || trade.buyer === undefined) {
        return (<div/>)
    }
    const firstname = trade.buyer.first_name;
    const negativeReputation = trade.buyer.negative_reputation;
    const positiveReputation = trade.buyer.positive_reputation;
    const payment_method = trade.payment_method;
    const amount = trade.amount;
    const rate = trade.rate;

    return (
        <Media>
            <Media.Body>
                <h3>({payment_method})</h3>
                <p>Amount: {amount}</p>
                <p>Rate: {rate}</p>
                <p>Total: {amount * rate}</p>
                <h5>{firstname}</h5>
                <Row>
                    <Col>
                        <Button variant="success">
                            <Badge pill variant="sucess">Positive likes</Badge>
                            <Badge variant="light">{negativeReputation}</Badge>
                        </Button>
                    </Col>
                    <Col>
                        <p>
                            <Button variant="danger">
                                <Badge pill variant="danger"> Negative likes</Badge>
                                <Badge variant="light">{positiveReputation}</Badge>
                            </Button>
                        </p>
                    </Col>
                </Row>
            </Media.Body>
        </Media>
    )
};

export default Buyer;
