import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form, Row } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";

const Income = () => {
  return (
    <Col>
      <Accordion defaultActiveKey="1">
        <ContextAwareToggle eventKey="0">Income(in Lakhs)</ContextAwareToggle>

        <Accordion.Collapse eventKey="0">
          <Form className="main-age-form">
            <Form.Control
              className="main-age-input"
              required
              type="number"
              min="1"
              placeholder="From"
              max="9"
              id='height1'
              
            />
            <Form.Control
              className="main-age-input"
              required
              type="number"
              min="4"
              placeholder="To"
              max="100"
              id='height2'
              
            />
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};
export default Income;