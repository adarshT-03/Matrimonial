import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSearch,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lgender: "",
      lageFrom: "",
      lageTo: "",
      lcaste: "",
      validated: false,
      loggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <div className="check-eligible">
          <Row className="mb-3">
            <Col md={3}></Col>
            <Col md={6}>
              <h2 align="center">
                Are you very serious about Marriage? Join our 100% Guarantee
                Program
              </h2>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={6} align="center">
              <Button
                type="submit"
                onClick={() => {
                  window.location.href = "/register";
                }}
              >
                Check Eligibility
              </Button>
            </Col>
            <Col md={3}></Col>
          </Row>
        </div>
        <div className="right-search">
          <Row>
            <Col className="mb-3">
              <h2 align="center">Life starts with the right search...</h2>
            </Col>
            <Form >
              <Row className="mb-3">
                <Col md={1}></Col>
                <Form.Group as={Col} controlId="lookGender">
                  <Form.Label>I'm looking for a</Form.Label>
                  <Form.Select
                    defaultValue="Female"
                    onChange={(e) => {
                      this.setState({ lgender: e.target.value });
                    }}
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Age From</Form.Label>
                  <Form.Select
                    defaultValue="Female"
                    onChange={(e) => {
                      this.setState({ lageFrom: e.target.value });
                    }}
                  >
                    <option value="21">21</option>
                    <option value="24">24</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>To</Form.Label>
                  <Form.Select
                    defaultValue="Female"
                    onChange={(e) => {
                      this.setState({ lageTo: e.target.value });
                    }}
                  >
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Caste/Division</Form.Label>
                  <Form.Select
                    defaultValue="-Caste-"
                    onChange={(e) => {
                      this.setState({ lcaste: e.target.value });
                    }}
                  >
                    <option value="-Caste-">-Caste-</option>
                    <option value="Kurumbhar">Kurumbhar</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Button type="submit" className="mt_30">
                    <a href='/content'>
                    Let's Begin
                    </a>
                  </Button>
                </Form.Group>
                <Col md={1}></Col>
              </Row>
            </Form>
          </Row>
        </div>
        <div className="find-someone">
          <Row className="mb-3">
            <Col md={12}>
              <h2 align="center" className="white_clr">
                Get Married in 3 easy steps
              </h2>
            </Col>
          </Row>
          <Row align="center">
            <Col md={4}>
              <FontAwesomeIcon icon={faUserPlus} className="mb-3 icon" />
              <h3 className="white_clr">Sign Up</h3>
              <p className="white_clr">Register for free and get verified</p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faSearch} className="mb-3 icon" />
              <h3 className="white_clr">Discover</h3>
              <p className="white_clr">Look for the love of your life</p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faComment} className="mb-3 icon" />
              <h3 className="white_clr">Connect</h3>
              <p className="white_clr">Communicate with the Matches you like</p>
            </Col>
          </Row>
        </div>
        <div className="above_foot">
          <Container>
            <h5 className="mb-3">
              Ganeshkongumatrimony helps you to connect with the perfect life
              partner
            </h5>
            <p>
              <strong>
                Ganeshkongumatrimony is free to register. It's fast and easy. It
                offers unmatched experience in finding the perfect life partner.
              </strong>
            </p>
            <p>
              <strong>
                We offer superior service and customer satisfaction. Our firm
                commitment towards building and maintaining strong customer
                relationship has resulted in our position as one of the fastest
                growing online matrimonial service provider.
              </strong>
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default Content;
