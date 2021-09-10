import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";

const Education = () => {
  return (
    <Col>
      <Accordion defaultActiveKey="1">
        <ContextAwareToggle eventKey="0">Education</ContextAwareToggle>

        <Accordion.Collapse eventKey="0">
          <Form id="dosham-check">
            <Form.Check
              type="checkbox"
              label="Schooling"
              name="Schooling"
              id="education1"
            />
            <Form.Check
              type="checkbox"
              label="Diploma"
              name="Diploma"
              id="education2"
            />
            <Form.Check type="checkbox" label="Ug" name="Ug" id="education3" />
            <Form.Check type="checkbox" label="Pg" name="Pg" id="education4" />
            <Form.Check
              type="checkbox"
              label="Doctorate"
              name="Doctorate"
              id="education5"
            />
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};
export default Education;
