import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
      <div className="hero-section h-50 text-white d-flex align-items-center hero-background" style={{
          backgroundImage: 'url(assets/images/img4.jpg)', opacity: 1,
          backgroundPosition: "center", backgroundSize:"cover" }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} xl={5}>
            <h1 className="hero-title display-4">Welcome to My Website</h1>
            <h2 className="hero-subtitle">Discover Amazing Content</h2>
            <Form className="hero-search">
              <Row className="align-items-center">
                <Col xs={8} md={9}>
                  <Form.Control type="text" placeholder="Search..." className="search-input" />
                </Col>
                <Col xs={4} md={3}>
                  <Button className="search-button">Search</Button>
                </Col>
              </Row>
            </Form>
            <h5 className="hero-description">Get Started Today!</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;