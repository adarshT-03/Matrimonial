import "../App.css";
import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form, Row } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";
import { UserProvider } from '../Context/UserContext'

const Age = () => {
 
  return (
    <Col>
      <Accordion defaultActiveKey="1">
        <ContextAwareToggle eventKey="0">Age</ContextAwareToggle>

        <Accordion.Collapse eventKey="0">
          <Form className="main-age-form">
            <Form.Control
              className="main-age-input"
              required
              type="number"
              min="18"
              placeholder="From"
              max="50"
              id='age1'
            />
            <Form.Control
              className="main-age-input"
              required
              type="number"
              min="18"
              placeholder="To"
              max="50"
              id='age2'
            />
          </Form>
      
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};
export default Age;
