import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LeftPart from "./containers/LeftPart";
import MiddlePart from "./components/MiddlePart";
import RightPart from "./components/RightPart";


function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <Container>
                <Row>
                    <Col sm>
                        <LeftPart/>
                    </Col>
                    <Col sm>
                        <MiddlePart/>
                    </Col>
                    <Col sm>
                        <RightPart/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
