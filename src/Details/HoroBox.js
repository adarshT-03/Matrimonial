import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../Context/UserContext";
import { message } from "antd";

class HoroBox extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.state = {
      showForm: false,
      about: null,
      validated: false,
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
  changeSection() {
    this.setState({ showForm: !this.state.showForm });
    console.log("clicked");
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      this.setState({ validated: true });
    } else {
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
            about: this.state.about,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          message.success("Data Saved Successfully.");

          this.changeSection();
        });
    }
  };
  componentDidMount() {
    const { details } = this.context;
    console.log(details, "compound");
    if (details == "" || details == null || details == undefined) {
    } else {
      this.setState({
        about: details.about == undefined ? "" : details.about,
      });
    }
  }

  render() {
    const { details } = this.context;
    const AbouSection = (
      <>
        <div className="horo-box-main">
          <Col className="certi-main-col main-2" lg={6} md={6} sm={12} xs={12}>
            <Col className="certi-first-col">
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">12</h4>
                <h6 className="horo-sec-info">
                  {" "}
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo12 == ""
                    ? "-"
                    : details.boxHoroscope.horo12.join(", ")}
                </h6>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">1</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo1 == ""
                    ? "-"
                    : details.boxHoroscope.horo1.join(", ")}
                </h6>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">2</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo2 == ""
                    ? "-"
                    : details.boxHoroscope.horo2.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-4"
              >
                <h4 className="certi-text">3</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo3 == ""
                    ? "-"
                    : details.boxHoroscope.horo3.join(", ")}
                </h6>
              </Col>
            </Col>
            <Col className="certi-second-col">
              <Col className="certi-sec-col1">
                <Col className="certi-11">
                  <h4 className="certi-text ">11</h4>
                  <h6 className="horo-sec-info">
                    {details.boxHoroscope == undefined ||
                    details.boxHoroscope == ""
                      ? "-"
                      : details.boxHoroscope.horo11 == ""
                      ? "-"
                      : details.boxHoroscope.horo11.join(", ")}
                  </h6>
                </Col>
                <Col className="certi-10">
                  {" "}
                  <h4 className="certi-text">10</h4>
                  <h6 className="horo-sec-info">
                    {details.boxHoroscope == undefined ||
                    details.boxHoroscope == ""
                      ? "-"
                      : details.boxHoroscope.horo10 == ""
                      ? "-"
                      : details.boxHoroscope.horo10.join(", ")}
                  </h6>
                </Col>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="certi-mid-col">
               Rasi
              </Col>
              <Col lg={3} md={3} sm={3} xs={3}>
                <Col className="certi-sec-col certi-4">
                  <h4 className="certi-text">4</h4>
                  <h6 className="horo-sec-info">
                    {details.boxHoroscope == undefined ||
                    details.boxHoroscope == ""
                      ? "-"
                      : details.boxHoroscope.horo4 == ""
                      ? "-"
                      : details.boxHoroscope.horo4.join(", ")}
                  </h6>
                </Col>
                <Col className="certi-sec-col certi-4">
                  {" "}
                  <h4 className="certi-text">5</h4>
                  <h6 className="horo-sec-info">
                    {details.boxHoroscope == undefined ||
                    details.boxHoroscope == ""
                      ? "-"
                      : details.boxHoroscope.horo5 == ""
                      ? "-"
                      : details.boxHoroscope.horo5.join(", ")}
                  </h6>
                </Col>
              </Col>
            </Col>
            <Col className="certi-first-col certi-9">
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">9</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo9 == ""
                    ? "-"
                    : details.boxHoroscope.horo9.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">8</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo8 == ""
                    ? "-"
                    : details.boxHoroscope.horo8.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">7</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo7 == ""
                    ? "-"
                    : details.boxHoroscope.horo7.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-4 certi-9"
              >
                <h4 className="certi-text">6</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscope == undefined ||
                  details.boxHoroscope == ""
                    ? "-"
                    : details.boxHoroscope.horo6 == ""
                    ? "-"
                    : details.boxHoroscope.horo6.join(", ")}
                </h6>
              </Col>
            </Col>
          </Col>
          <Col className="certi-main-col main-1" lg={6} md={6} sm={12} xs={12}>
            <Col className="certi-first-col">
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">12</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo12 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo12.join(", ")}
                </h6>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">1</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo1 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo1.join(", ")}
                </h6>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className="certi-sec-col">
                <h4 className="certi-text">2</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo2 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo2.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-4"
              >
                <h4 className="certi-text">3</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo3 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo3.join(", ")}
                </h6>
              </Col>
            </Col>
            <Col className="certi-second-col">
              <Col className="certi-sec-col1">
                <Col className="certi-11">
                  <h4 className="certi-text ">11</h4>
                  <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo11 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo11.join(", ")}
                </h6>
                </Col>
                <Col className="certi-10">
                  {" "}
                  <h4 className="certi-text">10</h4>
                  <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo10 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo10.join(", ")}
                </h6>
                </Col>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="certi-mid-col">
                Navasam
              </Col>
              <Col lg={3} md={3} sm={3} xs={3}>
                <Col className="certi-sec-col certi-4">
                  <h4 className="certi-text">4</h4>
                  <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo4 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo4.join(", ")}
                </h6>
                </Col>
                <Col className="certi-sec-col certi-4">
                  {" "}
                  <h4 className="certi-text">5</h4>
                  <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo5 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo5.join(", ")}
                </h6>
                </Col>
              </Col>
            </Col>
            <Col className="certi-first-col certi-9">
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">9</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo9 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo9.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">8</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo8 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo8.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-9"
              >
                <h4 className="certi-text">7</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo7 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo7.join(", ")}
                </h6>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="certi-sec-col certi-4 certi-9"
              >
                <h4 className="certi-text">6</h4>
                <h6 className="horo-sec-info">
                  {details.boxHoroscopeSecond == undefined ||
                  details.boxHoroscopeSecond == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo6 == ""
                    ? "-"
                    : details.boxHoroscopeSecond.horo6.join(", ")}
                </h6>
              </Col>
            </Col>
          </Col>
        </div>
      </>
    );
    const AboutForm = (
      <Form
        className="details-form"
        noValidate
        validated={this.state.validated}
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            required
            as="textarea"
            rows={3}
            value={this.state.about}
            onChange={(e) => {
              this.setState({ about: e.target.value });
            }}
          />
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
            <FontAwesomeIcon icon={faUserTie} className="details-icon" />
            <Col className="detail-title">Horoscope Box</Col>
          </Col>
          <Col
            lg={2}
            md={4}
            sm={6}
            xs={6}
            align="right"
            className="details-edit-button"
          >
            <a href="./horocer">
              <Button>Edit</Button>
            </a>
          </Col>
        </Row>

        {this.state.showForm ? AboutForm : AbouSection}
      </Col>
    );
  }
}
HoroBox.contextType = UserContext;
export default HoroBox;
