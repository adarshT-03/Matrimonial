import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Select from "react-select";
import UserContext from "../Context/UserContext";
import { message } from "antd";

const EducationList = [
  { label: "SSC", value: "SSC" },
  { label: "HSC", value: "HSC" },
  { label: "B-Tech", value: "B-Tech" },
];
const SpecilizationList = [
  { label: "Agriculture", value: "Agriculture" },
  { label: "Aviation", value: "Aviation" },
  { label: "Computer Science", value: "Computer Science" },
  { label: "Doctor", value: "Doctor" },
];
const IndustryList = [
  { label: "Agriculture", value: "Agriculture" },
  { label: "Electronics", value: "Electronics" },
  { label: "Dairy", value: "Dairy" },
  { label: "Construction", value: "Construction" },
  { label: "Warehousing", value: "Warehousing" },
];

class ProfessionalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.state = {
      showForm: false,
      ueducation: "",
      uspecilization: "",
      ucollege: "",
      ueducationaldetails: "",
      usector: "",
      uindustry: "",
      ujobtitle: "",
      uincome: "",
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
          professional: {
            parteducation: this.state.ueducation,
            partspecialization: this.state.uspecialization,
            partcollege: this.state.ucollege,
            parteducationaldetails: this.state.ueducationaldetails,
            partsector: this.state.usector,
            partindustry: this.state.uindustry,
            partjobtitle: this.state.ujobtitle,
            partincome: this.state.uincome,
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
    const { professional } = this.context;
    if (
      professional == "" ||
      professional == undefined ||
      professional == null
    ) {
    } else {
      this.setState({
        ueducation:
          professional.parteducation == undefined
            ? ""
            : professional.parteducation,
        uspecialization:
          professional.partspecialization == undefined
            ? ""
            : professional.partspecialization,
        ucollege:
          professional.partcollege == undefined ? "" : professional.partcollege,
        ueducationaldetails:
          professional.parteducationaldetails == undefined
            ? ""
            : professional.parteducationaldetails,
        usector:
          professional.partsector == undefined ? "" : professional.partsector,
        uindustry:
          professional.partindustry == undefined
            ? ""
            : professional.partindustry,
        ujobtitle:
          professional.partjobtitle == undefined
            ? ""
            : professional.partjobtitle,
        uincome:
          professional.partincome == undefined ? "" : professional.partincome,
      });
    }
  }

  render() {
    const ProfDetailsForm = (
      <Form
        className="details-form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <Form.Group
          as={Row}
          className="mb-2 input-center "
          controlId="ueducation"
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
            Education
          </Form.Label>
          <Col
            sm="12"
            lg="8"
            xs="12"
            md="8"
            className="profess-select details-select"
          >
            <Select
              className="detail-form-input2"
              options={EducationList}
              isSearchable={true}
              value={EducationList.find(
                (obj) => obj.value == this.state.ueducation
              )}
              onChange={(e) => {
                this.setState({
                  ueducation: e.value,
                });
              }}
            />
            <Select
              className="detail-form-input2"
              options={SpecilizationList}
              isSearchable={true}
              placeholder="Specilization"
              value={SpecilizationList.find(
                (obj) => obj.value == this.state.uspecialization
              )}
              onChange={(e) => {
                this.setState({
                  uspecialization: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="ucollege">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            College / Institution
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="ucollege"
              placeholder="College / Institution name"
              value={this.state.ucollege}
              onChange={(e) => {
                this.setState({ ucollege: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uedudetail"
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
            Education Details
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="uedudetail"
              placeholder="Education Detail"
              value={this.state.ueducationaldetails}
              onChange={(e) => {
                this.setState({ ueducationaldetails: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="usector">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Sector
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Private"
              name="sector"
              value="Private"
              checked={this.state.usector === "Private"}
              onChange={(e) => {
                this.setState({ usector: e.target.value });
              }}
              type="radio"
              id={`sector-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Government"
              name="sector"
              value="Government"
              checked={this.state.usector === "Government"}
              onChange={(e) => {
                this.setState({ usector: e.target.value });
              }}
              type="radio"
              id={`sector-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Business"
              name="sector"
              value="Business"
              checked={this.state.usector === "Business"}
              onChange={(e) => {
                this.setState({ usector: e.target.value });
              }}
              type="radio"
              id={`sector-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Not Working"
              name="sector"
              value="Not Working"
              checked={this.state.usector === "Not Working"}
              onChange={(e) => {
                this.setState({ usector: e.target.value });
              }}
              type="radio"
              id={`sector-radio-4`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Agriculture / Farming"
              name="sector"
              value="Agriculture / Farming"
              checked={this.state.usector === "Agriculture / Farming"}
              onChange={(e) => {
                this.setState({ usector: e.target.value });
              }}
              type="radio"
              id={`sector-radio-5`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center "
          controlId="uindustry"
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
            Industry
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="details-select">
            <Select
              className="detail-form-input2"
              options={IndustryList}
              isSearchable={true}
              value={IndustryList.find(
                (obj) => obj.value == this.state.uindustry
              )}
              onChange={(e) => {
                this.setState({
                  uindustry: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="ujobtitle"
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
            Job Title
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="ujobtitle"
              placeholder="Job Name"
              value={this.state.ujobtitle}
              onChange={(e) => {
                this.setState({ ujobtitle: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="uincome">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Annual Income
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="uincome"
              placeholder="Annual Income "
              value={this.state.uincome}
              onChange={(e) => {
                this.setState({ uincome: e.target.value });
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
    const ProfDetailsScetion = (
      <Row className="details-sec">
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Education</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.ueducation == "" ? "-" : this.state.ueducation}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">College</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.uspecialization == ""
              ? "-"
              : this.state.uspecialization}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Educational Details</Col>
          <Col className="details-sec-info">
            {this.state.ueducationaldetails == ""
              ? "-"
              : this.state.ueducationaldetails}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Sector</Col>
          <Col className="details-sec-info">
            {this.state.usector == "" ? "-" : this.state.usector}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Industry</Col>
          <Col className="details-sec-info">
            {this.state.uindustry == "" ? "-" : this.state.uindustry}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Job Title</Col>
          <Col className="details-sec-info">
            {this.state.ujobtitle == "" ? "-" : this.state.ujobtitle}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Annual Income</Col>
          <Col className="details-sec-info">
            {this.state.uincome == "" ? "-" : this.state.uincome}
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
            <FontAwesomeIcon icon={faGraduationCap} className="details-icon" />
            <Col className="detail-title">Professional Information</Col>
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
        {this.state.showForm ? ProfDetailsForm : ProfDetailsScetion}
      </Col>
    );
  }
}
ProfessionalInformation.contextType = UserContext;
export default ProfessionalInformation;
