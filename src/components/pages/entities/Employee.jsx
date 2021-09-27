import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './employee.css';

export default function Employee() {
    return (

        <Container fluid>
            <Row xs={12} md={12} lg={12}>
                <Col style={{ backgroundColor: "blue" }}>1 of 2</Col>
                <Col style={{ backgroundColor: "pink" }}></Col>
            </Row>
            <Row xs={1} md={2}>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row xs="auto">
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    )
}
