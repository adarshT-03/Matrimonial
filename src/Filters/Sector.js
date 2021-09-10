import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";

const Sector = () => {
  return (
    <Col>
      <Accordion defaultActiveKey="1">
        <ContextAwareToggle eventKey="0">Sector</ContextAwareToggle>

        <Accordion.Collapse eventKey="0">
          <Form id="dosham-check">
            <Form.Check
              type="checkbox"
              label="Private"
              name="Private"
              id="sector1"
            />
            <Form.Check
              type="checkbox"
              label="Government"
              name="Government"
              id="sector2"
            />
            <Form.Check
              type="checkbox"
              label="Business"
              name="Business"
              id="sector3"
            />
            <Form.Check
              type="checkbox"
              label="Agriculture / Farming"
              name="Agriculture / Farming"
              id="sector4"
            />
            <Form.Check
              type="checkbox"
              label="Not Working"
              name="Not Working"
              id="sector5"
            />
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};
export default Sector;
