import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";

const OwnHouse = () => {
  return (
    <Col>
      <Accordion defaultActiveKey="1">
        <ContextAwareToggle eventKey="0">Own House</ContextAwareToggle>

        <Accordion.Collapse eventKey="0">
          <Form id="dosham-check">
            <Form.Check type="checkbox" label="Yes" name="Yes" id="house1" />
            <Form.Check type="checkbox" label="No" name="No" id="house2" />
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};
export default OwnHouse;
