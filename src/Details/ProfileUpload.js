import React, { useState } from "react";
import "../App.css";
import { Row, Col, Form } from "react-bootstrap";
import UserContext from "../Context/UserContext";
import { Image } from "antd";

class ProfileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      image: "",
    };
  }
  componentDidMount() {
    const { details } = this.context;
    console.log(this.state.image, "image");
    console.log(details, "compound");
    if (details == "" || details == null || details == undefined) {
    } else {
      this.setState({
        image:
          details.photo == "" || undefined || null
            ? "https://www.mayyam.in/css/images/noavatar.jpg"
            : details.photo,
      });
    }
  }
  render() {
    console.log(this.state.image, "image");
    const ImageLoading = () => {
      return <div className="loader1"></div>;
    };
    const clearImage = () => {
      alert("clicked");
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
            photo: "",
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "image");
          this.setState({
            image: "https://www.mayyam.in/css/images/noavatar.jpg",
          });
        });
    };
    const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "matprofileimage");

      this.setState({
        loading: true,
      });

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/insankarii/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      console.log(file);

      this.setState({
        image: file.secure_url,
        loading: false,
      });
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
            photo: this.state.image,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "image");
        });
    };

    return (
      <>
        {this.state.loading ? (
          <Col className="imageLoading">
            <ImageLoading />
          </Col>
        ) : (
          <Image
            width="100%"
            src={
              this.state.image == undefined ||
              this.state.image == "" ||
              this.state.image == null
                ? "https://www.mayyam.in/css/images/noavatar.jpg"
                : this.state.image
            }
          />
        )}

        <Form>
          <Form.Group className="mb-3">
            <Col className="profile-image-div">
              <Form.Control
                type="file"
                name="file"
                accept="image/*"
                id="upload-btn"
                hidden
                onChange={uploadImage}
              />
              <Form.Label htmlFor="upload-btn" className="profile-btn">
                Upload Image
              </Form.Label>
              <Form.Label className="profile-btn" onClick={clearImage}>
                Clear Image
              </Form.Label>
            </Col>
          </Form.Group>
        </Form>
      </>
    );
  }
}
ProfileUpload.contextType = UserContext;
export default ProfileUpload;
