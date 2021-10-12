import React from "react";
import Select from "react-select";
import { Col, Accordion, Form, Row, Container, Button } from "react-bootstrap";
import LoginInsideHeader from "./LoginInsideHeader";
import Footer from "./Footer";
import MySelect from "./MySelect";
import UserContext from "../Context/UserContext";
import { message } from "antd";

const selectOptions = [
  { label: "Lak", value: "Lak" },
  { label: "Suri", value: "Suri" },
  { label: "Sandh", value: "Sandh" },
  { label: "Sev", value: "Sev" },
  { label: "Puth", value: "Puth" },
  { label: "Guru", value: "Guru" },
  { label: "Suk", value: "Suk" },
  { label: "Sani", value: "Sani" },
  { label: "Ragu", value: "Ragu" },
  { label: "Kethu", value: "Kethu" },
  { label: "Mandh", value: "Mandh" },
  { label: "Veya", value: "Veya" },
  { label: "Guru(Va)", value: "Guru(Va)" },
  { label: "Puth(Va)", value: "Puth(Va)" },
  { label: "Suk(Va)", value: "Suk(Va)" },

  { label: "Sani(Va)", value: "Sani(Va)" },
];

class HoroCer2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uhoro1: [""],
      uhoro2: [""],
      uhoro3: [""],
      uhoro4: [""],
      uhoro5: [""],
      uhoro6: [""],
      uhoro7: [""],
      uhoro8: [""],
      uhoro9: [""],
      uhoro10: [""],
      uhoro11: [""],
      uhoro12: [""],
    };
  }
  handleHoro1 = (e) => {
    this.setState({
      uhoro1: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro2 = (e) => {
    this.setState({
      uhoro2: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro3 = (e) => {
    this.setState({
      uhoro3: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro4 = (e) => {
    this.setState({
      uhoro4: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro5 = (e) => {
    this.setState({
      uhoro5: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro6 = (e) => {
    this.setState({
      uhoro6: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro7 = (e) => {
    this.setState({
      uhoro7: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro8 = (e) => {
    this.setState({
      uhoro8: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro9 = (e) => {
    this.setState({
      uhoro9: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro10 = (e) => {
    this.setState({
      uhoro10: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro11 = (e) => {
    this.setState({
      uhoro11: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  handleHoro12 = (e) => {
    this.setState({
      uhoro12: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
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
          boxHoroscopeSecond: {
            horo1: this.state.uhoro1,
            horo2: this.state.uhoro2,
            horo3: this.state.uhoro3,
            horo4: this.state.uhoro4,
            horo5: this.state.uhoro5,
            horo6: this.state.uhoro6,
            horo7: this.state.uhoro7,
            horo8: this.state.uhoro8,
            horo9: this.state.uhoro9,
            horo10: this.state.uhoro10,
            horo11: this.state.uhoro11,
            horo12: this.state.uhoro12,
          },
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        message.success("Data Saved Successfully.");
        console.log(data, "data");
      });
  };
  componentDidMount() {
    const { boxHoroSecond } = this.context;
    if (boxHoroSecond == "" || boxHoroSecond == undefined || boxHoroSecond == null) {
    } else {
      this.setState({
        uhoro1: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo1,
        uhoro2: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo2,
        uhoro3: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo3,
        uhoro4: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo4,
        uhoro5: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo5,
        uhoro6: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo6,
        uhoro7: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo7,
        uhoro8: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo8,
        uhoro9: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo9,
        uhoro10: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo10,
        uhoro11: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo11,
        uhoro12: boxHoroSecond.horo1 == undefined ? "" : boxHoroSecond.horo12,
      });
    }
  }
  render() {
    return (
      <>
        <Col>
          <Col className="certi-main-col">
            <Col className="certi-first-col">
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">12</h4>

                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro12}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro12.includes(obj.value)
                  )}
                />
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">1</h4>
                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro1}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro1.includes(obj.value)
                  )}
                />
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">2</h4>
                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro2}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro2.includes(obj.value)
                  )}
                />
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-4"
              >
                <h4 className="certi-text">3</h4>
                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro3}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro3.includes(obj.value)
                  )}
                />
              </Col>
            </Col>
            <Col className="certi-second-col">
              <Col className="certi-sec-col1">
                <Col className="certi-11">
                  <h4 className="certi-text ">11</h4>
                  <MySelect
                    className="certi-sel"
                    options={selectOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={this.handleHoro11}
                    allowSelectAll={true}
                    value={selectOptions.filter((obj) =>
                      this.state.uhoro11.includes(obj.value)
                    )}
                  />
                </Col>
                <Col className="certi-10">
                  {" "}
                  <h4 className="certi-text">10</h4>
                  <MySelect
                    className="certi-sel"
                    options={selectOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={this.handleHoro10}
                    allowSelectAll={true}
                    value={selectOptions.filter((obj) =>
                      this.state.uhoro10.includes(obj.value)
                    )}
                  />
                </Col>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="certi-mid-col">
               Navasam
              </Col>
              <Col lg={3} md={3} sm={3} xs={3}>
                <Col className="certi-sec-col certi-4">
                  <h4 className="certi-text">4</h4>
                  <MySelect
                    className="certi-sel"
                    options={selectOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={this.handleHoro4}
                    allowSelectAll={true}
                    value={selectOptions.filter((obj) =>
                      this.state.uhoro4.includes(obj.value)
                    )}
                  />
                </Col>
                <Col className="certi-sec-col certi-4">
                  {" "}
                  <h4 className="certi-text">5</h4>
                  <MySelect
                    className="certi-sel"
                    options={selectOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={this.handleHoro5}
                    allowSelectAll={true}
                    value={selectOptions.filter((obj) =>
                      this.state.uhoro5.includes(obj.value)
                    )}
                  />
                </Col>
              </Col>
            </Col>
            <Col className="certi-first-col ">
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">9</h4>
                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro9}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro9.includes(obj.value)
                  )}
                />
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">8</h4>
                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro8}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro8.includes(obj.value)
                  )}
                />
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">7</h4>
                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro7}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro7.includes(obj.value)
                  )}
                />
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-4 certi-9"
              >
                <h4 className="certi-text">6</h4>
                <MySelect
                  className="certi-sel"
                  options={selectOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={this.handleHoro6}
                  allowSelectAll={true}
                  value={selectOptions.filter((obj) =>
                    this.state.uhoro6.includes(obj.value)
                  )}
                />
              </Col>
            </Col>
          </Col>
          {/* Button */}
          <Col>
            {" "}
            <Row className="form-bottom-button">
              <Button
                type="submit"
                className="horo-certi-btn"
                id="horo-certi-btn"
                onClick={(e) => this.handleSubmit(e)}
              >
                Submit Horoscope
              </Button>
            </Row>
          </Col>
        </Col>
      </>
    );
  }
}
HoroCer2.contextType = UserContext;
export default HoroCer2;
