import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faGraduationCap,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import UserContext from "../Context/UserContext";
import { message } from "antd";

const IndustryList = [
  { label: "Agriculture", value: "Agriculture" },
  { label: "Electronics", value: "Electronics" },
  { label: "Dairy", value: "Dairy" },
  { label: "Construction", value: "Construction" },
  { label: "Warehousing", value: "Warehousing" },
];

class ProfessionalPref extends React.Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.state = {
      showForm: false,
      uindustry: false,
      uassets: false,

      uprefeducation: "",
      uprefindustry: [""],
      uprefassets: "",
      sector: {
        Private:false
      }
      ,
      sector1: "",
    };
  }
  checkBox = (e) => {
    var { value, checked } = e.target;

    this.setState(
      (e) => {
        var SelectedSector = e.sector;
        return (SelectedSector[value] = checked);
      },
      function (res) {
        console.log(this.state.sector);
      }
    );
  };
  changeSection() {
    this.setState({ showForm: !this.state.showForm });
    console.log("clicked");
  }
  handleIndustry = (e) => {
    this.setState({
      uprefindustry: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // var displaySector1=Array.object(this.state.sector).filter((x)=>this.state.sector[x]) ;
    // this.setState({
    //   sector1:displaySector1+', '
    // })
    console.log(this.state.uindustry, "uni");

    console.log(Object.assign({}, this.state.sector), "sectors");
    console.log(JSON.stringify(this.state.sector), "jsectors");
    console.log(this.state.sector1, "sect1");
    console.log(this.state.uindustry1, "industry");

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
          professionalprefer: {
            parteducation: this.state.uprefeducation,
            partindustry: this.state.uindustry,
            partprefindustry: this.state.uprefindustry,

            partsector: Object.assign({}, this.state.sector),
            partassets: this.state.uassets,
            partprefassets: this.state.uprefassets,
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
    const { professionalprefer } = this.context;

    if (
      professionalprefer == "" ||
      professionalprefer == undefined ||
      professionalprefer == null
    ) {
    } else {
      this.setState({
        uprefeducation:
          professionalprefer.parteducation == undefined
            ? ""
            : professionalprefer.parteducation,
        uindustry:
          professionalprefer.partindustry == undefined
            ? ""
            : professionalprefer.partindustry,
        uprefindustry:
          professionalprefer.partprefindustry == undefined
            ? ""
            : professionalprefer.partprefindustry,

        uassets:
          professionalprefer.partassets == undefined
            ? ""
            : professionalprefer.partassets,
        uprefassets:
          professionalprefer.partprefassets == undefined
            ? ""
            : professionalprefer.partprefassets,

        sector:
          professionalprefer.partsector == undefined
            ? ""
            : professionalprefer.partsector,
      });
    }
  }

  render() {
    console.log(this.state.sector,'sector')
    const { professionalprefer } = this.context;

    var displaySector = Object.keys(this.state.sector).filter(
      (x) => this.state.sector[x]
    );

    const ProffesionalPrefDetails = (
      <Row className="details-sec">
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Education</Col>
          <Col className="details-sec-info">
            {this.state.uprefeducation == "" ? "-" : this.state.uprefeducation}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Sector</Col>
          <Col className="details-sec-info">
            {this.state.sector == null ? "-" : displaySector.join(", ")}
          </Col>
        </Col>

        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Industry</Col>
          <Col className="details-sec-info">
            {this.state.uindustry
              ? "Doesn't Matter"
              : this.state.uprefindustry == ""
              ? "-"
              : this.state.uprefindustry.join(", ")}
          </Col>
        </Col>
        <Col lg={3} className="details-sec-content">
          <Col className="details-sec-title">Annual Income</Col>
          <Col className="details-sec-info">
            {/* {this.state.uassets
              ? "Doesn't Matter"
              : this.state.uprefassets == ""
              ? "-"
              : this.state.uprefassets} */}
            {this.state.uassets
              ? "Doesn't Matter"
              : this.state.uprefassets == ""
              ? "-"
              : this.state.uprefassets}
          </Col>
        </Col>
      </Row>
    );

    const ProfessionalPrefForm = (
      <Form
        className="details-form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        {displaySector}
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefeducation"
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
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              required
              inline
              label="Doesn't Matter"
              name="ueducation"
              value="Doesn't Matter"
              checked={this.state.uprefeducation === "Doesn't Matter"}
              onChange={(e) => {
                this.setState({ uprefeducation: e.target.value });
              }}
              type="radio"
              id={`uprefeducation-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Schooling"
              name="ueducation"
              value="Schooling"
              checked={this.state.uprefeducation === "Schooling"}
              onChange={(e) => {
                this.setState({ uprefeducation: e.target.value });
              }}
              type="radio"
              id={`uprefeducation-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Diploma"
              name="ueducation"
              value="Diploma"
              checked={this.state.uprefeducation === "Diploma"}
              onChange={(e) => {
                this.setState({ uprefeducation: e.target.value });
              }}
              type="radio"
              id={`uprefeducation-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Degree"
              name="ueducation"
              value="Degree"
              checked={this.state.uprefeducation === "Degree"}
              onChange={(e) => {
                this.setState({ uprefeducation: e.target.value });
              }}
              type="radio"
              id={`uprefeducation-radio-4`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Pg"
              name="ueducation"
              value="Pg"
              checked={this.state.uprefeducation === "Pg"}
              onChange={(e) => {
                this.setState({ uprefeducation: e.target.value });
              }}
              type="radio"
              id={`uprefeducation-radio-5`}
              className="details-form-radio"
            />
            <Form.Check
              required
              inline
              label="Doctorate"
              name="ueducation"
              value="Doctorate"
              checked={this.state.uprefeducation === "Doctorate"}
              onChange={(e) => {
                this.setState({ uprefeducation: e.target.value });
              }}
              type="radio"
              id={`uprefeducation-radio-6`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefsector"
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
            Sector
          </Form.Label>
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              inline
              label="Private"
              name="uprefsector"
              value="Private"
              checked={this.state.sector.Private}
              onChange={this.checkBox}
              type="checkbox"
              id={`uprefsector-radio-1`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Government"
              name="uprefsector"
              value="Government"
              checked={this.state.sector.Government}
              onChange={this.checkBox}
              type="checkbox"
              id={`uprefsector-radio-2`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Business"
              name="uprefsector"
              value="Business"
              checked={this.state.sector.Business}
              onChange={this.checkBox}
              type="checkbox"
              id={`uprefsector-radio-3`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Not Working"
              name="uprefsector"
              value="NotWorking"
              checked={this.state.sector.NotWorking}
              onChange={this.checkBox}
              type="checkbox"
              id={`uprefsector-radio-4`}
              className="details-form-radio"
            />
            <Form.Check
              inline
              label="Agriculture / Farming"
              name="uprefsector"
              value="Agriculture"
              checked={this.state.sector.Agriculture}
              onChange={this.checkBox}
              type="checkbox"
              id={`uprefsector-radio-5`}
              className="details-form-radio"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-2 input-center"
          controlId="uprefindustry"
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
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              inline
              label="Doesn't Matter"
              name="uprefindustry"
              value="Doesn't Matter"
              checked={this.state.uindustry}
              onChange={(e) => {
                this.setState({ uindustry: !this.state.uindustry });
              }}
              type="checkbox"
              id={`uprefindustry-radio-1`}
              className="details-form-radio"
            />
            {this.state.uindustry ? (
              ""
            ) : (
              <Select
                isMulti
                className="detail-multiselect-input"
                options={IndustryList}
                isSearchable={true}
                value={IndustryList.filter((obj) =>
                  this.state.uprefindustry.includes(obj.value)
                )}
                onChange={this.handleIndustry}
              />
            )}
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
          <Col sm="12" lg="8" xs="12" md="8" className="detail-radio-btn">
            <Form.Check
              inline
              label="Doesn't Matter"
              name="uprefassets"
              value="Doesn't Matter"
              checked={this.state.uassets}
              onChange={(e) => {
                this.setState({ uassets: !this.state.uassets });
              }}
              type="checkbox"
              id={`uprefassets-radio-1`}
              className="details-form-radio"
            />
            {this.state.uassets ? (
              ""
            ) : (
              <Form.Control
                className="detail-form-input"
                required
                type="number"
                name="uassets"
                placeholder=""
                min={1}
                max={100000}
                value={this.state.uprefassets}
                onChange={(e) => {
                  this.setState({ uprefassets: e.target.value });
                }}
              />
            )}
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
            <FontAwesomeIcon icon={faGraduationCap} className="details-icon" />
            <Col className="detail-title">
              Professional Preference{this.state.uindustry}
            </Col>
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
        {this.state.showForm ? ProfessionalPrefForm : ProffesionalPrefDetails}
      </Col>
    );
  }
}
ProfessionalPref.contextType = UserContext;
export default ProfessionalPref;
