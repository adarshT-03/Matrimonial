import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { Image } from "antd";
import { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Col, Button, Form, Container } from "react-bootstrap";

class MarriageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortlistUsers: [],
      interestUsers: [],
    };
  }

  componentDidMount() {
    // console.log(this.props.shortlistedUsers);
    // console.log(this.props.interestedUsers);
    // console.log(
    //   this.props.details.basic === undefined
    //     ? null
    //     : this.props.details.basic.age
    // );
  }
  render() {
    return (
      <div className="info-main-div">
        <div className="info-img">
          <div>
            <Image
              src={
                this.props.details.photo === undefined ||
                this.props.details.photo === "" ||
                this.props.details.photo === null
                  ? "https://www.mayyam.in/css/images/noavatar.jpg"
                  : this.props.details.photo
              }
              height="170"
              width="100%"
            />
          </div>
          <h4>
            <a href={`./profile/${this.props.details._id}`}>
              {this.props.details.name}
            </a>
          </h4>
        </div>
        <div className="info-div">
          <div className="info-right-div">
            <div className="sponsored">
              <div>
                Sponsored
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ marginLeft: 5 }}
                />
              </div>
              <div className="hide-it">
                Restricted
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ marginLeft: 5 }}
                />
              </div>
            </div>
            <div className="info-right-div1">
              <div className="info-div-text">Age/Height</div>
              <div className="info-main-text">
                {this.props.details.basic == undefined
                  ? "-"
                  : this.props.details.basic.age == ""
                  ? "-"
                  : this.props.details.basic.age +
                    " Yrs, " +
                    this.props.details.basic.height +
                    " Inch."}
              </div>
            </div>
            <div className="info-right-div1 hide-div ">
              <div className="info-div-text">Raasi</div>
              <div className="info-main-text">
                {this.props.details.religion == undefined
                  ? "-"
                  : this.props.details.religion.partraassi == ""
                  ? "-"
                  : this.props.details.religion.partrassi}
              </div>
            </div>
            <div className="info-right-div1 hide-div">
              <div className="info-div-text">Nakshatram</div>
              <div className="info-main-text">
                {" "}
                {this.props.details.religion == undefined
                  ? "-"
                  : this.props.details.religion.partnakshatram == ""
                  ? "-"
                  : this.props.details.religion.partnakshatram}
              </div>
            </div>
            <div className="info-right-div1">
              <div className="info-div-text">Location</div>
              <div className="info-main-text">
                {" "}
                {this.props.details.location == undefined
                  ? "-"
                  : this.props.details.location.partcity == ""
                  ? "-"
                  : this.props.details.location.partcity}
              </div>
            </div>
            <div className="info-right-div1">
              <div className="info-div-text">Education</div>
              <div className="info-main-text">
                {this.props.details.professional == undefined
                  ? "-"
                  : this.props.details.professional.parteducation == ""
                  ? "-"
                  : this.props.details.professional.parteducation}
              </div>
            </div>
            <div className="info-right-div1 hide-div">
              <div className="info-div-text">Profession</div>
              <div className="info-main-text">
                {this.props.details.professional == undefined
                  ? "-"
                  : this.props.details.professional.partindustry == ""
                  ? "-"
                  : this.props.details.professional.partindustry}
              </div>
            </div>
            <div className="info-right-div1 hide-div">
              <div className="info-div-text">Annual Income</div>
              <div className="info-main-text">
                {this.props.details.professional == undefined
                  ? "-"
                  : this.props.details.professional.partincome == ""
                  ? "-"
                  : this.props.details.professional.partincome}
              </div>
            </div>
            <div className="info-right-div1 hide-div">
              <div className="info-div-text">Profile Match</div>
              <div className="info-main-text">Coming Soon</div>
            </div>
            <div className="info-right-div1 hide-div">
              <div className="info-div-text">Horoscope Match</div>
              <div className="info-main-text">Coming Soon</div>
            </div>
          </div>
          {this.props.loggedIn ? (
            <div className="info-buttons">
              <div>
                <NavLink to={`./view-jatharam/${this.props.details._id}`}>
                  <button className="in-but">View Jathagam</button>
                </NavLink>
                <button
                  className={
                    this.props.interestedUsers.includes(this.props.details._id)
                      ? "in-but activeClass"
                      : "in-but"
                  }
                  onClick={() => {
                    this.props.interestUser(this.props.details._id);
                  }}
                >
                  Interested
                </button>

                <button
                  className={
                    this.props.shortlistedUsers.includes(this.props.details._id)
                      ? "in-but activeClass"
                      : "in-but"
                  }
                  onClick={() => {
                    this.props.shortlistUser(this.props.details._id);
                  }}
                >
                  ShortList
                </button>
                <NavLink to={`./profile/${this.props.details._id}`}>
                  <button className="in-but">View Profile</button>
                </NavLink>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default MarriageCard;
