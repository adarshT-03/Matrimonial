import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { message,DatePicker } from "antd";

import UserContext from "../Context/UserContext";

const marritalStatusList = [
  { label: "Single", value: "Single" },
  { label: "Married", value: "Married" },
  { label: "Unmarried", value: "Unmarried" },
];
const motherTongueList = [
  { label: "Tamil", value: "Tamil" },
  { label: "Hindi", value: "Hindi" },
  { label: "Malyalam", value: "Malyalam" },
];

class BasicDetails extends React.Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);

    this.state = {
      showForm: false,
      uname: '',
      ugender: '',
      udob: '',
      uage: '',
      uheight: '',
      uweight: '',
      umarried: '',
      umtongue: '',
      ubtype: '',
      ucomplexion: '',
      uphysicalstat: '',
      ueating: '',
      udrinking: '',
      usmoking: '',
      value:'',
    };
  }
  changeSection() {
    this.setState({ showForm: !this.state.showForm });
    console.log("clicked");
  }
  ageCount(e) {
    var now =new Date();                            //getting current date
    var currentY= now.getFullYear();                //extracting year from the date
    var currentM= now.getMonth();                   //extracting month from the date
      
    var dobget =this.state.udob//getting user input
    var dob= new Date(dobget);                             //formatting input as date
    var prevY= dob.getFullYear();                          //extracting year from input date
    var prevM= dob.getMonth();                             //extracting month from input date
      
    var ageY =currentY - prevY;
    var ageM =Math.abs(currentM- prevM);          //converting any negative value to positive
      
   console.log(ageY)
   this.setState({ udob: e.target.value ,
    uage:ageY
  
  
  });
    }
 

  componentDidMount() {
    const { details, basic } = this.context;
    if (basic == "" || basic == null || basic == undefined) {
    } else {
      this.setState({
        uname: details.name == undefined ? "" : details.name,
        ugender: details.gender == undefined ? "" : details.gender,
        udob: basic.dob == undefined ? "" : basic.dob,
        uage: basic.age == undefined ? "" : basic.age,
        uheight: basic.height == undefined ? "" : basic.height,
        uweight: basic.weight == undefined ? "" : basic.weight,
        umarried: basic.married == undefined ? "" : basic.married,
        umtongue: basic.mtongue == undefined ? "" : basic.mtongue,
        ubtype: basic.btype == undefined ? "" : basic.btype,
        ucomplexion: basic.complexion == undefined ? "" : basic.complexion,
        uphysicalstat:
          basic.physicalstatus == undefined ? "" : basic.physicalstatus,
        ueating: basic.eating == undefined ? "" : basic.eating,
        udrinking: basic.drinking == undefined ? "" : basic.drinking,
        usmoking: basic.smoking == undefined ? "" : basic.smoking,
      });
    }
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
          name: this.state.uname,
          gender: this.state.ugender,

          basic: {
            age: this.state.uage,
            dob: this.state.udob,
            height: this.state.uheight,
            weight: this.state.uweight,
            married: this.state.umarried,
            mtongue: this.state.umtongue,
            btype: this.state.ubtype,
            complexion: this.state.ucomplexion,
            physicalstatus: this.state.uphysicalstat,
            eating: this.state.ueating,
            drinking: this.state.udrinking,
            smoking: this.state.usmoking,
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

  render() {
    const BasicDetailsForm = (
      <Form
        className="details-form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <Form.Group as={Row} className="mb-2 input-center" controlId="uname">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Name
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="uname"
              placeholder="Name"
              value={this.state.uname}
              onChange={(e) => {
                this.setState({ uname: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="ugender">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Gender
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Male"
              name="ugender"
              value="Male"
              checked={this.state.ugender === "Male"}
              onChange={(e) => {
                this.setState({ ugender: e.target.value });
              }}
              type="radio"
              id={`details-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Female"
              name="ugender"
              value="Female"
              checked={this.state.ugender === "Female"}
              onChange={(e) => {
                this.setState({ ugender: e.target.value });
              }}
              type="radio"
              id={`details-radio-2`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="udob">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Date of Birth
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="date"
              name="udob"
              placeholder="DD/MM/YY"
              value={this.state.udob}
              // onChange={(e) => {
              //   this.setState({ udob: e.target.value });
              // }}
              onChange={(e)=>this.ageCount(e)}
             
              // ref={(r) => this.state.udob = r}
            />
           
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="uheight">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Height
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="uheight"
              placeholder="Height(in inches)"
              value={this.state.uheight}
              onChange={(e) => {
                this.setState({ uheight: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="uweight">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Weight
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input"
              required
              type="text"
              name="uweight"
              placeholder="Weight(in Kgs)"
              value={this.state.uweight}
              onChange={(e) => {
                this.setState({ uweight: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="umarried">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Marital Status
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className='details-select'>
          <Select
              className="detail-form-input"
              options={marritalStatusList}
              isSearchable={true}
              value={marritalStatusList.find(
                (obj) => obj.value == this.state.umarried
              )}
              onChange={(e) => {
                this.setState({
                  umarried: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="umtongue">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Mother Tongue
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className='details-select'>
          <Select
              className="detail-form-input"
              options={motherTongueList}
              isSearchable={true}
              value={motherTongueList.find(
                (obj) => obj.value == this.state.umtongue
              )}
              onChange={(e) => {
                this.setState({
                  umtongue: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="ubtype">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Body Type
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Slim"
              name="ubtype"
              value="Slim"
              checked={this.state.ubtype === "Slim"}
              onChange={(e) => {
                this.setState({ ubtype: e.target.value });
              }}
              type="radio"
              id={`bodytype-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Average"
              name="ubtype"
              value="Average"
              checked={this.state.ubtype === "Average"}
              onChange={(e) => {
                this.setState({ ubtype: e.target.value });
              }}
              type="radio"
              id={`bodytype-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Heavy"
              name="ubtype"
              value="Heavy"
              checked={this.state.ubtype === "Heavy"}
              onChange={(e) => {
                this.setState({ ubtype: e.target.value });
              }}
              type="radio"
              id={`bodytype-radio-3`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="ucomplexion"
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
            Complexion
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Fair"
              name="ucomplexion"
              value="Fair"
              checked={this.state.ucomplexion === "Fair"}
              onChange={(e) => {
                this.setState({ ucomplexion: e.target.value });
              }}
              type="radio"
              id={`complexion-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Very Fair"
              name="ucomplexion"
              value="Very Fair"
              checked={this.state.ucomplexion === "Very Fair"}
              onChange={(e) => {
                this.setState({ ucomplexion: e.target.value });
              }}
              type="radio"
              id={`complexion-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Wheatish"
              name="ucomplexion"
              value="Wheatish"
              checked={this.state.ucomplexion === "Wheatish"}
              onChange={(e) => {
                this.setState({ ucomplexion: e.target.value });
              }}
              type="radio"
              id={`complexion-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Dark"
              name="ucomplexion"
              value="Dark"
              checked={this.state.ucomplexion === "Dark"}
              onChange={(e) => {
                this.setState({ ucomplexion: e.target.value });
              }}
              type="radio"
              id={`complexion-radio-4`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uphysicalstat"
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
            Physical Status
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Normal"
              name="uphysicalstat"
              value="Normal"
              checked={this.state.uphysicalstat === "Normal"}
              onChange={(e) => {
                this.setState({ uphysicalstat: e.target.value });
              }}
              type="radio"
              id={`physical-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Differently Abled"
              name="uphysicalstat"
              value="Differently Abled"
              checked={this.state.uphysicalstat === "Differently Abled"}
              onChange={(e) => {
                this.setState({ uphysicalstat: e.target.value });
              }}
              type="radio"
              id={`physical-radio-2`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="ueating">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Eating Habits
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Vegetarian"
              name="ueating"
              value="Vegetarian"
              checked={this.state.ueating === "Vegetarian"}
              onChange={(e) => {
                this.setState({ ueating: e.target.value });
              }}
              type="radio"
              id={`eating-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Non-Vegetarian"
              name="ueating"
              value="Non-Vegetarian"
              checked={this.state.ueating === "Non-Vegetarian"}
              onChange={(e) => {
                this.setState({ ueating: e.target.value });
              }}
              type="radio"
              id={`eating-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Eggetarian"
              name="ueating"
              value="Eggetarian"
              checked={this.state.ueating === "Eggetarian"}
              onChange={(e) => {
                this.setState({ ueating: e.target.value });
              }}
              type="radio"
              id={`eating-radio-3`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="udrinking"
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
            Drinking Habits
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Yes"
              name="udrinking"
              value="Yes"
              checked={this.state.udrinking === "Yes"}
              onChange={(e) => {
                this.setState({ udrinking: e.target.value });
              }}
              type="radio"
              id={`drinking-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Drink Socially"
              name="udrinking"
              value="Drink Socially"
              checked={this.state.udrinking === "Drink Socially"}
              onChange={(e) => {
                this.setState({ udrinking: e.target.value });
              }}
              type="radio"
              id={`drinking-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="No"
              name="udrinking"
              value="No"
              checked={this.state.udrinking === "No"}
              onChange={(e) => {
                this.setState({ udrinking: e.target.value });
              }}
              type="radio"
              id={`drinking-radio-3`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2 input-center" controlId="usmoking">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Smoking Habits
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              required
              inline
              label="Yes"
              name="usmoking"
              value="Yes"
              checked={this.state.usmoking === "Yes"}
              onChange={(e) => {
                this.setState({ usmoking: e.target.value });
              }}
              type="radio"
              id={`smoking-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Occasionally"
              name="usmoking"
              value="Occasionally"
              checked={this.state.usmoking === "Occasionally"}
              onChange={(e) => {
                this.setState({ usmoking: e.target.value });
              }}
              type="radio"
              id={`smoking-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="No"
              name="usmoking"
              value="No"
              checked={this.state.usmoking === "No"}
              onChange={(e) => {
                this.setState({ usmoking: e.target.value });
              }}
              type="radio"
              id={`smoking-radio-3`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Col>
          <Row className="form-bottom-button">
            <Button type="submit">Save</Button>
            <Button className="cancel-btn" onClick={() => this.changeSection()}>
              Cancel
            </Button>
          </Row>
        </Col>
      </Form>
    );

    // console.log(this.context,'context')
    const DetailsSection = (
      <Row className="details-sec">
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Name</Col>
          <Col className="details-sec-info">
            {this.state.uname == "" ? "-" : this.state.uname}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Body Type</Col>
          <Col className="details-sec-info">
            {this.state.ubtype == "" ? "-" : this.state.ubtype}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Age</Col>
          <Col className="details-sec-info">
            {/* {this.state.udob == "" ? "-" : this.state.udob} */}
            {this.state.uage == "" ? "-" : this.state.uage}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Complexion</Col>
          <Col className="details-sec-info">
            {this.state.ucomplexion == "" ? "-" : this.state.ucomplexion}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Height</Col>
          <Col className="details-sec-info">
            {this.state.uheight == "" ? "-" : this.state.uheight}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Weight</Col>
          <Col className="details-sec-info">
            {this.state.uweight == "" ? "-" : this.state.uweight}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Physical Status</Col>
          <Col className="details-sec-info">
            {this.state.uphysicalstat == "" ? "-" : this.state.uphysicalstat}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Eating Habits</Col>
          <Col className="details-sec-info">
            {this.state.ueating == "" ? "-" : this.state.ueating}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Mother Tongue</Col>
          <Col className="details-sec-info">
            {this.state.umtongue == "" ? "-" : this.state.umtongue}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Marital Status</Col>
          <Col className="details-sec-info">
            {this.state.umarried == "" ? "-" : this.state.umarried}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Drinking Habits</Col>
          <Col className="details-sec-info">
            {this.state.udrinking == "" ? "-" : this.state.udrinking}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Smoking Habits</Col>
          <Col className="details-sec-info">
            {this.state.usmoking == "" ? "-" : this.state.usmoking}
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
            <FontAwesomeIcon icon={faIdCard} className="details-icon" />
            <Col className="detail-title">Basic Details</Col>
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
        {this.state.showForm ? BasicDetailsForm : DetailsSection}
      </Col>
    );
  }
}
BasicDetails.contextType = UserContext;

export default BasicDetails;
