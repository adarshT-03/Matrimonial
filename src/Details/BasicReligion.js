import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom, faIdCard } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import UserContext from "../Context/UserContext";
import { message } from "antd";

const religionList = [
  { label: "Hindu", value: "Hindu" },
  { label: "Muslim", value: "Muslim" },
  { label: "Christian", value: "Christian" },
];

const nakshatramList = [
  { label: "Ashwini", value: "Ashwini" },
  { label: "Bharani", value: "Bharani" },
  { label: "Rohini", value: "Rohini" },
];

class BasicReligion extends React.Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.state = {
      showForm: false,
      uagefrom: "",
      uageto: "",
      uheightfrom: "",
      uheightto: "",
      uphysical: "",
      ucomplexion: "",
      udrinking: "",
      usmoking: "",
      ureligion: "",
      umothertongue: [""],
      ucaste: [""],
      unakshatra: [""],
      uownhouse: "",
      uland: "",
      ufamily: "",
      uassets: "",
      umarrital: [""],
      married: {
        Any: false,
        NeverMarried: false,
        Widowed: false,
        Divorced: false,
      },
      uprefdosham: {
        No: false,
        Chevvai: false,
        RahuKethu: false,
        ParikaraChevvai: false,
        DontMatter: false,
      },
      ueatinghabits: {
        Vegetarian: false,
        Nonvegetarian: false,
        Eggetarian: false,
        DoesntMatter: false,
      },
    };
  }
  changeSection() {
    this.setState({ showForm: !this.state.showForm });
    console.log("clicked");
  }
  marriedCheckbox = (e) => {
    var { value, checked } = e.target;
    this.setState((e) => {
      var SelectedMarried = e.married;
      return (SelectedMarried[value] = checked);
    });
  };
  doshamCheckbox = (e) => {
    var { value, checked } = e.target;
    this.setState((e) => {
      var SelectedDosham = e.uprefdosham;
      return (SelectedDosham[value] = checked);
    });
  };
  eatingCheckbox = (e) => {
    var { value, checked } = e.target;
    this.setState((e) => {
      var SelectedEating = e.ueatinghabits;
      return (SelectedEating[value] = checked);
    });
  };
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
          partnerpreference: {
            partagefrom: this.state.uagefrom,
            partageto: this.state.uageto,
            partheightfrom: this.state.uheightfrom,
            partheightto: this.state.uheightto,
            partphysical: this.state.uphysical,
            partcomplexion: this.state.ucomplexion,
            partdrinking: this.state.udrinking,
            partsmoking: this.state.usmoking,
            partreligion: this.state.ureligion,
            partmothertongue: this.state.umothertongue,
            partcaste: this.state.ucaste,
            partnakshatra: this.state.unakshatra,
            partownhouse: this.state.uownhouse,
            partland: this.state.uland,
            partfamily: this.state.ufamily,
            partassets: this.state.uassets,
            partmarrital: this.state.umarrital,
            partmarriedstatus: this.state.married,
            parteatinghabits: this.state.ueatinghabits,
            partdosham: this.state.uprefdosham,
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
    const { partnerpreference } = this.context;
    if (
      partnerpreference == "" ||
      partnerpreference == undefined ||
      partnerpreference == null
    ) {
    } else {
      this.setState({
        uagefrom:
          partnerpreference.partagefrom == undefined
            ? ""
            : partnerpreference.partagefrom,
        uageto:
          partnerpreference.partageto == undefined
            ? ""
            : partnerpreference.partageto,
        uheightfrom:
          partnerpreference.partheightfrom == undefined
            ? ""
            : partnerpreference.partheightfrom,
        uheightto:
          partnerpreference.partheightto == undefined
            ? ""
            : partnerpreference.partheightto,
        uphysical:
          partnerpreference.partphysical == undefined
            ? ""
            : partnerpreference.partphysical,
        ucomplexion:
          partnerpreference.partcomplexion == undefined
            ? ""
            : partnerpreference.partcomplexion,
        udrinking:
          partnerpreference.partdrinking == undefined
            ? ""
            : partnerpreference.partdrinking,
        usmoking:
          partnerpreference.partsmoking == undefined
            ? ""
            : partnerpreference.partsmoking,
        ureligion:
          partnerpreference.partreligion == undefined
            ? ""
            : partnerpreference.partreligion,
        umothertongue:
          partnerpreference.partmothertongue == undefined
            ? ""
            : partnerpreference.partmothertongue,
        ucaste:
          partnerpreference.partcaste == undefined
            ? ""
            : partnerpreference.partcaste,
        unakshatra:
          partnerpreference.partnakshatra == undefined
            ? ""
            : partnerpreference.partnakshatra,
        uownhouse:
          partnerpreference.partownhouse == undefined
            ? ""
            : partnerpreference.partownhouse,
        uland:
          partnerpreference.partland == undefined
            ? ""
            : partnerpreference.partland,
        ufamily:
          partnerpreference.partfamily == undefined
            ? ""
            : partnerpreference.partfamily,
        uassets:
          partnerpreference.partassets == undefined
            ? ""
            : partnerpreference.partassets,
        umarrital:
          partnerpreference.partmarrital == undefined
            ? ""
            : partnerpreference.partmarrital,
        married:
          partnerpreference.partmarriedstatus == undefined
            ? ""
            : partnerpreference.partmarriedstatus,
        ueatinghabits:
          partnerpreference.parteatinghabits == undefined
            ? ""
            : partnerpreference.parteatinghabits,
        uprefdosham:
          partnerpreference.partdosham == undefined
            ? ""
            : partnerpreference.partdosham,
      });
    }
  }
  handleMotherTongue = (e) => {
    this.setState({
      umothertongue: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleCaste = (e) => {
    this.setState({
      ucaste: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleNakshatram = (e) => {
    this.setState({
      unakshatra: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleEating = (e) => {
    this.setState({
      umarrital: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };

  render() {
    var displayMarried = Object.keys(this.state.married).filter(
      (x) => this.state.married[x]
    );
    var displayDosham = Object.keys(this.state.uprefdosham).filter(
      (x) => this.state.uprefdosham[x]
    );
    var displayEating = Object.keys(this.state.ueatinghabits).filter(
      (x) => this.state.ueatinghabits[x]
    );
    const BasicReligionDetails = (
      <Row className="details-sec">
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Age</Col>
          <Col className="details-sec-info">
            {this.state.uagefrom == "" ? "" : this.state.uagefrom}-
            {this.state.uageto == "" ? "" : this.state.uageto}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Height</Col>
          <Col className="details-sec-info">
            {this.state.uheightfrom == "" ? "" : this.state.uheightfrom}-
            {this.state.uheightto == "" ? "" : this.state.uheightto}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Marital Status</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.married == ""
              ? "-"
              : displayMarried == ""
              ? "-"
              : displayMarried.join(", ")}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Physical Status</Col>
          <Col className="details-sec-info">
            {this.state.uphysical == "" ? "-" : this.state.uphysical}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Eating Habits</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.ueatinghabits == ""
              ? "-"
              : displayEating == ""
              ? "-"
              : displayEating.join(", ")}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Smoking Habits</Col>
          <Col className="details-sec-info">
            {this.state.usmoking == "" ? "-" : this.state.usmoking}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Drinking Habits</Col>
          <Col className="details-sec-info">
            {this.state.udrinking == "" ? "-" : this.state.udrinking}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Religion</Col>
          <Col className="details-sec-info">
            {this.state.ureligion == "" ? "-" : this.state.ureligion}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Mother Tongue</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.umothertongue == "" ? "-" : this.state.umothertongue}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Caste / Division</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.ucaste == "" ? "-" : this.state.ucaste}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Nakshatram / Star</Col>
          <Col className="details-sec-info">
            {this.state.unakshatra == ""
              ? "-"
              : this.state.unakshatra.join(", ")}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Dosham</Col>
          <Col className="details-sec-info">
            {" "}
            {this.state.uprefdosham == ""
              ? "-"
              : displayDosham == ""
              ? "-"
              : displayDosham.join(", ")}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Own House</Col>
          <Col className="details-sec-info">
            {this.state.uownhouse == "" ? "-" : this.state.uownhouse}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Land(Acres)</Col>
          <Col className="details-sec-info">
            {this.state.uland == "" ? "-" : this.state.uland}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Approximate Assets</Col>
          <Col className="details-sec-info">
            {this.state.uassets == "" ? "-" : this.state.uassets}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Complexion</Col>
          <Col className="details-sec-info">
            {this.state.ucomplexion == "" ? "-" : this.state.ucomplexion}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Family Status</Col>
          <Col className="details-sec-info">
            {this.state.ufamily == "" ? "-" : this.state.ufamily}
          </Col>
        </Col>
      </Row>
    );
    const BaiscReligionPrefForm = (
      <Form
        className="details-form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        {displayDosham}
        {displayMarried}
        {displayEating}
        <Form.Group as={Row} className="mb-2 input-center" controlId="uprefage">
          <Form.Label
            column
            sm="12"
            lg="4"
            xs="12"
            md="4"
            className="details-form-label"
          >
            <sup>*</sup>
            Preferred Age
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Row>
              <Col>
                <Form.Control
                  className="detail-form-input "
                  required
                  type="number"
                  name="uprefagefrom"
                  placeholder=" From"
                  value={this.state.uagefrom}
                  onChange={(e) => {
                    this.setState({ uagefrom: e.target.value });
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  className="detail-form-input"
                  required
                  type="number"
                  name="uprefageto"
                  placeholder="To "
                  value={this.state.uageto}
                  onChange={(e) => {
                    this.setState({ uageto: e.target.value });
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefmarrital"
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
            Marrital Status
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              inline
              label="Any"
              name="umarrital"
              value="Any"
              checked={this.state.married.Any}
              onChange={this.marriedCheckbox}
              type="checkbox"
              id={`marrital-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Never Married"
              name="umarrital"
              value="NeverMarried"
              checked={this.state.married.NeverMarried}
              onChange={this.marriedCheckbox}
              type="checkbox"
              id={`marrital-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Widowed"
              name="umarrital"
              value="Widowed"
              checked={this.state.married.Widowed}
              onChange={this.marriedCheckbox}
              type="checkbox"
              id={`marrital-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Divorced"
              name="umarrital"
              value="Divorced"
              checked={this.state.married.Divorced}
              onChange={this.marriedCheckbox}
              type="checkbox"
              id={`marrital-radio-4`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefheight"
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
            Height(in inches)
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Row>
              <Col>
                <Form.Control
                  className="detail-form-input "
                  required
                  type="number"
                  name="uprefheightfrom"
                  placeholder=" From"
                  step="any"
                  min={3}
                  max={10}
                  value={this.state.uheightfrom}
                  onChange={(e) => {
                    this.setState({ uheightfrom: e.target.value });
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  className="detail-form-input "
                  required
                  type="number"
                  name="uprefheightfrom"
                  placeholder=" To"
                  step="any"
                  min={3}
                  max={10}
                  value={this.state.uheightto}
                  onChange={(e) => {
                    this.setState({ uheightto: e.target.value });
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefphysical"
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
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              required
              inline
              label="Normal"
              name="uphysical"
              value="Normal"
              checked={this.state.uphysical === "Normal"}
              onChange={(e) => {
                this.setState({ uphysical: e.target.value });
              }}
              type="radio"
              id={`uphysical-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Differently Abled"
              name="uphysical"
              value="Differently Abled"
              checked={this.state.uphysical === "Differently Abled"}
              onChange={(e) => {
                this.setState({ uphysical: e.target.value });
              }}
              type="radio"
              id={`uphysical-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Doesn't Matter"
              name="uphysical"
              value="Doesn't Matter"
              checked={this.state.uphysical === "Doesn't Matter"}
              onChange={(e) => {
                this.setState({ uphysical: e.target.value });
              }}
              type="radio"
              id={`uphysical-radio-3`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefcomplexion"
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
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
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
              id={`ucomplexion-radio-1`}
              className="details-form-radio"
            />
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
              id={`ucomplexion-radio-2`}
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
              id={`ucomplexion-radio-3`}
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
              id={`ucomplexion-radio-4`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Doesn't Matter"
              name="ucomplexion"
              value="Doesn't Matter"
              checked={this.state.ucomplexion === "Doesn't Matter"}
              onChange={(e) => {
                this.setState({ ucomplexion: e.target.value });
              }}
              type="radio"
              id={`ucomplexion-radio-5`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefeating"
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
            Eating Habits
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              inline
              label="Vegetarian"
              name="ueating"
              value="Vegetarian"
              // checked={this.state.ueatinghabits.Vegetarian}
              onChange={this.eatingCheckbox}
              type="checkbox"
              id={`eating-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Non-Vegetarian"
              name="ueating"
              value="NonVegetarian"
              // checked={this.state.ueatinghabits.NonVegetarian}
              onChange={this.eatingCheckbox}
              type="checkbox"
              id={`eating-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Eggetarian"
              name="ueating"
              value="Eggetarian"
              // checked={this.state.ueatinghabits.Eggetarian}
              onChange={this.eatingCheckbox}
              type="checkbox"
              id={`eating-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Doesn't Matter"
              name="ueating"
              value="Doesn't Matter"
              // checked={this.state.ueatinghabits}
              onChange={this.eatingCheckbox}
              type="checkbox"
              id={`eating-radio-4`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefdrinking"
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
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
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
              id={`udrinking-radio-1`}
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
              id={`udrinking-radio-2`}
              className="details-form-radio"
            />
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
              id={`udrinking-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Doesn't Matter"
              name="udrinking"
              value="Doesn't Matter"
              checked={this.state.udrinking === "Doesn't Matter"}
              onChange={(e) => {
                this.setState({ udrinking: e.target.value });
              }}
              type="radio"
              id={`udrinking-radio-4`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefsmoking"
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
            Smoking Habits
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
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
              id={`usmoking-radio-1`}
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
              id={`usmoking-radio-2`}
              className="details-form-radio"
            />
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
              id={`usmoking-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Doesn't Matter"
              name="usmoking"
              value="Doesn't Matter"
              checked={this.state.usmoking === "Doesn't Matter"}
              onChange={(e) => {
                this.setState({ usmoking: e.target.value });
              }}
              type="radio"
              id={`usmoking-radio-4`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="ureligionpref"
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
            Religion
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="details-select">
            <Select
              className="detail-form-input"
              options={religionList}
              isSearchable={true}
              value={religionList.find(
                (obj) => obj.value == this.state.ureligion
              )}
              onChange={(e) => {
                this.setState({
                  ureligion: e.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="umothertongue"
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
            Mother Tongue
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input "
              required
              type="text"
              name="upartmother"
              placeholder="Hindi, Tamil... "
              value={this.state.umothertongue}
              onChange={(e) => {
                this.setState({ umothertongue: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="ucastepref"
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
            Caste / Division
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input "
              required
              type="text"
              name="upartcaste"
              placeholder=" "
              value={this.state.ucaste}
              onChange={(e) => {
                this.setState({ ucaste: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefdosham"
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
            Dosham
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              inline
              label="No"
              name="uprefdosham"
              value="No"
              checked={this.state.uprefdosham.No}
              onChange={this.doshamCheckbox}
              type="checkbox"
              id={`uprefdosham-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Chevvai"
              name="uprefdosham"
              value="Chevvai"
              //   checked={this.state.uownhouse === "Yes"}
              onChange={this.doshamCheckbox}
              type="checkbox"
              id={`uprefdosham-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Rahu & Kethu"
              name="uprefdosham"
              value="RahuKethu"
              checked={this.state.uprefdosham.RahuKethu}
              onChange={this.doshamCheckbox}
              type="checkbox"
              id={`uprefdosham-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Parikara Chevvai"
              name="uprefdosham"
              value="Parikara Chevvai"
              //   checked={this.state.uownhouse === "Yes"}
              onChange={this.doshamCheckbox}
              type="checkbox"
              id={`uprefdosham-radio-4`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Doesn't Matter"
              name="uprefdosham"
              value="Doesnt Matter"
              checked={this.state.uprefdosham.DontMatter}
              onChange={this.doshamCheckbox}
              type="checkbox"
              id={`uprefdosham-radio-5`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="unakshatrampref"
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
            Nakshatram
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="details-select">
            <Select
              isMulti
              className="detail-multiselect-input"
              options={nakshatramList}
              isSearchable={true}
              value={nakshatramList.filter((obj) =>
                this.state.unakshatra.includes(obj.value)
              )}
              onChange={this.handleNakshatram}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uhousepref"
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
            Own House
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              required
              inline
              label="Yes"
              name="uprefhouse"
              value="Yes"
              checked={this.state.uownhouse === "Yes"}
              onChange={(e) => {
                this.setState({ uownhouse: e.target.value });
              }}
              type="radio"
              id={`uhouse-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="No"
              name="uprefhouse"
              value="No"
              checked={this.state.uownhouse === "No"}
              onChange={(e) => {
                this.setState({ uownhouse: e.target.value });
              }}
              type="radio"
              id={`uhouse-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Doesn't Matter"
              name="uprefhouse"
              value="Doesn't Matter"
              checked={this.state.uownhouse === "Doesn't Matter"}
              onChange={(e) => {
                this.setState({ uownhouse: e.target.value });
              }}
              type="radio"
              id={`uhouse-radio-3`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefland"
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
            Land (in Acres)
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input "
              required
              type="number"
              name="uprefland"
              placeholder=" "
              value={this.state.uland}
              onChange={(e) => {
                this.setState({ uland: e.target.value });
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          required
          as={Row}
          className="mb-2 input-center"
          controlId="upreffamilystatus"
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
            Family Status
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Check
              inline
              label="Middle Class"
              name="upreffamilystatus"
              value="Middle Class"
              checked={this.state.ufamily === "Middle Class"}
              onChange={(e) => {
                this.setState({ ufamily: e.target.value });
              }}
              type="radio"
              id={`preffamilystatus-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Uper Middle Class"
              name="upreffamilystatus"
              value="Uper Middle Class"
              checked={this.state.ufamily === "Uper Middle Class"}
              onChange={(e) => {
                this.setState({ ufamily: e.target.value });
              }}
              type="radio"
              id={`preffamilystatus-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Rich"
              name="preffamilystatus"
              value="Rich"
              checked={this.state.ufamily === "Rich"}
              onChange={(e) => {
                this.setState({ ufamily: e.target.value });
              }}
              type="radio"
              id={`preffamilystatus-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Affluent"
              name="preffamilystatus"
              value="Affluent"
              checked={this.state.ufamily === "Affluent"}
              onChange={(e) => {
                this.setState({ ufamily: e.target.value });
              }}
              type="radio"
              id={`preffamilystatus-radio-4`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Doesn't Matter"
              name="preffamilystatus"
              value="Doesn't Matter"
              checked={this.state.ufamily === "Doesn't Matter"}
              onChange={(e) => {
                this.setState({ ufamily: e.target.value });
              }}
              type="radio"
              id={`preffamilystatus-radio-5`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefassets"
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
            Approximate Assets(in Lakhs)
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8">
            <Form.Control
              className="detail-form-input "
              required
              type="number"
              name="uprefassets"
              placeholder=" "
              value={this.state.uassets}
              onChange={(e) => {
                this.setState({ uassets: e.target.value });
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
          <Col lg={10} className="details-header">
            <FontAwesomeIcon icon={faAtom} className="details-icon" />
            <Col className="detail-title">Basic & Religion Preference</Col>
          </Col>
          <Col lg={2} className="details-edit-button">
            <Button
              onClick={() => {
                this.changeSection();
              }}
            >
              Edit
            </Button>
          </Col>
        </Row>
        {this.state.showForm ? BaiscReligionPrefForm : BasicReligionDetails}
      </Col>
    );
  }
}
BasicReligion.contextType = UserContext;
export default BasicReligion;
