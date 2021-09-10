import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";

const MaritalStatus = () => {
  return (
    <Col>
    <Accordion defaultActiveKey="1">
      <ContextAwareToggle eventKey="0">Marrital Status</ContextAwareToggle>

      <Accordion.Collapse eventKey="0">
        <Form id="dosham-check">
          <Form.Check
            type="checkbox"
            label="Unmarried"
            name="Unmarried"
            id="marrital1"
          />
          <Form.Check
            type="checkbox"
            label="Married"
            name="Married"
            id="marrital2"
          />
          <Form.Check
            type="checkbox"
            label="Divorced"
            name="Divorced"
            id="marrital3"
            
          />
          <Form.Check
            type="checkbox"
            label="Widowed"
            name="Widowed"
            id="marrital4"
          />
         
        </Form>
      </Accordion.Collapse>
    </Accordion>
  </Col>
  );
};
export default MaritalStatus;
