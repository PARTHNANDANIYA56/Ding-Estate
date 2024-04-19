import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Error = () => {
    return (
        <Container>
            <Row className="justify-content-center text-center">
                <Col>
                    <h1>404 - Page Not Found</h1>
                    <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
                    <NavLink to="/DevelopingApps">
                        <Button variant="primary">Go Home</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default Error;
