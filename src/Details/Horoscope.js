import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../Context/UserContext";
import { message } from "antd";

class Horoscope extends React.Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    // this.onChange=this.onChange.bind(this);

    this.state = {
      showForm: false,
      ubirthtime: null,
      ubirthplace: null,
      urashi: null,
      value: "",
    };
  }
  changeSection() {
    this.setState({ showForm: !this.state.showForm });
    console.log("clicked");
  }

  handleSubmit = (event) => {
   
    event.preventDefault();
    event.stopPropagation();
    fetch("http://localhost:3000/set-details", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        fields: {
          horoscope: {
            birthtime: this.state.ubirthtime,
            birthplace: this.state.ubirthplace,
            birthrashi: this.state.urashi,
          },
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        message.success("Data Saved Successfully.");
        console.log(data, "data");
        this.changeSection();
      });
  };

  componentDidMount() {
    const { details, basic, horoscope } = this.context;
    if (horoscope == "" || horoscope == null || horoscope == undefined) {
    } else {
      this.setState({
        ubirthtime: horoscope.birthtime == undefined ? "" : horoscope.birthtime,
        ubirthplace:
          horoscope.birthplace == undefined ? "" : horoscope.birthplace,
        urashi: horoscope.birthrashi == undefined ? "" : horoscope.birthrashi,
      });
    }
  }

  render() {
    const onChange = (time) => {
      console.log(time, "hiii");
      this.setState({
        value: time,
      });
      console.log(this.state.value, "value");
    };
    const HoroscopeForm = (
      <Form
        className="details-form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="ubirthtime"
        >
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Birth Time
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="time"
              name="ubirthtime"
              placeholder="Birth Time"
              value={this.state.ubirthtime}
              onChange={(e) => {
                this.setState({ ubirthtime: e.target.value });
              }}
            />
           
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="ubirthplace"
        >
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Birth Place
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="ubirthplace"
              placeholder="Birth Place"
              value={this.state.ubirthplace}
              onChange={(e) => {
                this.setState({ ubirthplace: e.target.value });
              }}
            />
          </Col>
        </Form.Group>

        <Col>
          <Row className="form-bottom-button">
            <Button type="submit">Save</Button>
            <Button
              className="cancel-btn"
              onClick={() => {
                this.changeSection();
              }}
            >
              Cancel
            </Button>
          </Row>
        </Col>
      </Form>
    );

    const HoroscopeDetails = (
      <Row className="details-sec">
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Birth Time</Col>
          <Col className="details-sec-info">
            {this.state.ubirthtime == undefined ? "-" : this.state.ubirthtime}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Birth Place</Col>
          <Col className="details-sec-info">
            {this.state.ubirthplace == undefined ? "-" : this.state.ubirthplace}
          </Col>
        </Col>
      </Row>
    );
    return (
      <Col className="details-main mt-4">
        <Row className="details-head">
          <Col
            lg={10}
            md={8}
            sm={6}
            xs={6}
            align="left"
            className="details-header"
          >
            <FontAwesomeIcon icon={faStarOfDavid} className="details-icon" />
            <Col className="detail-title">Horoscope</Col>
          </Col>
          <Col
            lg={2}
            md={4}
            sm={6}
            xs={6}
            align="right"
            className="details-edit-button"
          >
            <Button
              onClick={() => {
                this.changeSection();
              }}
            >
              Edit
            </Button>
          </Col>
        </Row>
        {this.state.showForm ? HoroscopeForm : HoroscopeDetails}
      </Col>
    );
  }
}
Horoscope.contextType = UserContext;
export default Horoscope;
