import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <Container>
            <Row className="mb-3">
              <Col md={2}>About Us</Col>
              <Col md={2}>Contact Us</Col>
              <Col md={2}>Terms And Conditions</Col>
              <Col md={2}>Privacy Policy</Col>
            </Row>
            <Row>
              <Col>
                Copyright © 2017 Ganeshkongumatrimony All rights reserved.
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
