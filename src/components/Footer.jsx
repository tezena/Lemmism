import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-dark py-4 mt-5 " style={{backgroundColor:'#D9D9D9'}}>
      <Container>
        <Row>
          {/* First Column */}
          <Col xs={12} sm={6} md={4} className="my-auto">
            <img
              src="/llogo.png"
              alt="Foundation Logo"
              className="mb-2"
              style={{ width: "300px" }}
            />
          </Col>

          {/* Second Column */}
          <Col xs={12} sm={6} md={4} className="mb-4 d-flex-col justify-center">
            <h2>Foundation</h2>
            <ul className="list-unstyled ">
              <li>
                <a href="#faq" className="text-dark text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="text-dark text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#terms" className="text-dark text-decoration-none">
                  Terms
                </a>
              </li>
            </ul>
          </Col>

          {/* Third Column */}
          <Col xs={12} md={4} className="mb-4 text-dark w-md-25  ">
            <div className="d-flex-col gap-4 justify-content-center mt-3 bg-light p-1 ">
              <h5 className="flex-start">Follow us</h5>
              <ul className="list-unstyled d-flex gap-2 mx-5">
                <li>
                  <a href="#link1" className="text-dark text-decoration-none">
                    <Image
                      src="assets/images/social/linkedin.png"
                      className="w-100"
                    />
                    
                  </a>
                </li>
                <li>
                  <a href="#link2" className="text-dark text-decoration-none">
                    <Image
                      src="assets/images/social/twitter.png"
                      className="w-75"
                    />
                  </a>
                </li>
                <li>
                  <a href="#link3" className="text-dark text-decoration-none">
                    <Image
                      src="assets/images/social/facebook.png"
                      className="w-100"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe Form */}
            <Form className="d-flex gap-2 justify-content-center mt-4">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="warning" type="submit" >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
