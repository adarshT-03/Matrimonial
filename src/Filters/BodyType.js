import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";

const BodyType = () => {
  return (
    <Col>
      <Accordion defaultActiveKey="1">
        <ContextAwareToggle eventKey="0">Body Type</ContextAwareToggle>

        <Accordion.Collapse eventKey="0">
          <Form id="dosham-check">
            <Form.Check type="checkbox" label="Slim" name="Slim" id="body1" />
            <Form.Check type="checkbox" label="Heavy" name="Heavy" id="body2" />
            <Form.Check
              type="checkbox"
              label="Average"
              name="Average"
              id="body3"
            />
            <Form.Check
              type="checkbox"
              label="Not Specified"
              name="Not Specified"
              id="body4"
            />
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};
export default BodyType;
