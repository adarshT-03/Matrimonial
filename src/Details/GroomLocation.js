import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import UserContext from "../Context/UserContext";
import { message } from "antd";

const CountryList = [
  { label: "India", value: "India" },
  { label: "pakistan", value: "pakistan" },
  { label: "Africa", value: "Africa" },
  { label: "America", value: "America" },
  { label: "China", value: "China" },
];
const ResidingStateList = [
  { label: "Mumbai", value: "Mumbai" },
  { label: "Chennai", value: "Chennai" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Kerala", value: "Kerala" },
  { label: "Up", value: "Up" },
];
const ResidingCity = [
  { label: "Mumbai", value: "Mumbai" },
  { label: "Chennai", value: "Chennai" },
  { label: "Hyderabad", value: "Hyderabad" },
];

class GroomLocation extends React.Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.state = {
      showForm: false,
      ucountry: "",
      ustate: "",
      ucity: "",
      uaddress: "",
    };
  }
  changeSection() {
    this.setState({ showForm: !this.state.showForm });
    console.log("clicked");
  }
  handleSubmit = (event) => {
  
    const form = event.currentTarget;
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
          location: {
            partcountry: this.state.ucountry,
            partstate: this.state.ustate,
            partcity: this.state.ucity,
            partaddress: this.state.uaddress,
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
    const { location } = this.context;
    if (location == "" || location == undefined || location == null) {
    } else {
      this.setState({
        ucountry: location.partcountry == undefined ? "" : location.partcountry,
        ustate: location.partstate == undefined ? "" : location.partstate,
        ucity: location.partcity == undefined ? "" : location.partcity,
        uaddress: location.partaddress == undefined ? "" : location.partaddress,
      });
    }
  }

  render() {
    const GroomDetailsSection = (
      <Row className="details-sec">
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Country</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.ucountry == "" ? "-" : this.state.ucountry}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">State</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.ustate == "" ? "-" : this.state.ustate}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">City</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.ucity == "" ? "-" : this.state.ucity}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Address</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.uaddress == "" ? "-" : this.state.uaddress}
          </Col>
        </Col>
      </Row>
    );
    const GroomLocationForm = (
      <Form
        className="details-form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <Form.Group as={Row} className="mb-2 input-center" controlId="ucountry">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Country Living in
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="details-select">
            <Select
              className="detail-form-input"
              options={CountryList}
              isSearchable={true}
              value={CountryList.find(
                (obj) => obj.value == this.state.ucountry
              )}
              onChange={(e) => {
                this.setState({
                  ucountry: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="ustate">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Residing State
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="details-select">
            <Select
              className="detail-form-input"
              options={ResidingStateList}
              isSearchable={true}
              value={ResidingStateList.find(
                (obj) => obj.value == this.state.ustate
              )}
              onChange={(e) => {
                this.setState({
                  ustate: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="ucity">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Residing City/ District
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="details-select">
            <Select
              className="detail-form-input"
              options={ResidingCity}
              isSearchable={true}
              value={ResidingCity.find((obj) => obj.value == this.state.ucity)}
              onChange={(e) => {
                this.setState({
                  ucity: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="uaddress">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Address
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="address-text">
            <Form.Control
              required
              as="textarea"
              rows={3}
              value={this.state.uaddress}
              onChange={(e) => {
                this.setState({ uaddress: e.target.value });
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
            <FontAwesomeIcon icon={faMapMarkerAlt} className="details-icon" />
            <Col className="detail-title">Groom Location</Col>
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
        {this.state.showForm ? GroomLocationForm : GroomDetailsSection}
      </Col>
    );
  }
}
GroomLocation.contextType = UserContext;
export default GroomLocation;
