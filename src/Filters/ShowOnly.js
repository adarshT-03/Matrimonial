import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";

const ShowOnly = () => {
  return (
    <Col>
      <Accordion defaultActiveKey="1">
        <ContextAwareToggle eventKey="0">Show Only</ContextAwareToggle>

        <Accordion.Collapse eventKey="0">
          <Form id="dosham-check">
            <Form.Check
              type="checkbox"
              label="With Photo"
              name="With Photo"
              id="show1"
            />
            <Form.Check
              type="checkbox"
              label="Without Photo"
              name="Without Photo"
              id="show2"
            />
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};
export default ShowOnly;
