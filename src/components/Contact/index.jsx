import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import contact from "./helper";

import Shape7 from "../../assests/shape/shape-7.png";
import Shape1 from "../../assests/shape/shape-1.png";
import "./contact.css";

export default function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState({
    error: false,
    message: "",
  });

  const { name, email, mobile, message } = userData;

  const handleChange = (inputField) => (event) => {
    const value = event.target.value;
    setUserData({ ...userData, [inputField]: value });
  };

  const updatePassword = () => {
    if (!name || !email || !mobile || !message) {
      setStatus({ error: true, message: "Please fill all the fields!" });
      return;
    }
    contact(userData)
      .then((res) => {
        if (res.status === 200) {
          console.log({ res });
          setStatus({ error: false, message: "" });
        } else {
          setStatus({ error: true, message: res.message });
        }
      })
      .catch((err) => {
        setStatus({ error: true, message: err });
      });
  };

  return (
    <section className="contact__container">
      <Row className="d-flex justify-content-center">
        <Col lg="12" className="mb-5">
          <div className="course__top d-flex justify-content-between align-items-center">
            <div className="course__top__left w-100">
              <div
                className="section page-banner-section"
                style={{
                  background: "linear-gradient(to right, #11998e80, #38ef7d8c)",
                  minHeight: "300px",
                  paddingTop: "35px",
                }}
              >
                <div className="shape-1">
                  <img src={Shape7} alt="" />
                </div>
                <div className="shape-2">
                  <img src={Shape1} alt="" />
                </div>
                <div className="shape-3"></div>
                <div className="container">
                  <div className="course-details-banner-content">
                    <h2 className="title" style={{ fontSize: "40px" }}>
                      Contact Us
                    </h2>
                    {/* <p className="text" style={{ fontSize: "20px" }}>
                      Expand your knowledge and skills with our wide range of
                      courses.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="mb-5 wrapper">
          <div className="contact__details">
            <div className="col-md-2 content">
              <div className="d-flex flex-column align-items-center text-center">
                <i
                  class="fa-solid fa-phone"
                  style={{ color: "#292929", fontSize: "40px" }}
                ></i>
                <span className="font-weight-bold">Call Us</span>
                <span className="text-black-50">+91 7276009009</span>
              </div>
              <div className="d-flex flex-column align-items-center text-center">
                <i
                  class="fa-solid fa-envelope"
                  style={{ color: "#292929", fontSize: "40px" }}
                ></i>
                <span className="font-weight-bold">Email Us</span>
                <span className="text-black-50 ">
                  <a
                    href="mailto:shivam12@gmail.com"
                    style={{ color: "unset" }}
                  >
                    shivam12@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="px-5 contact__form__container">
            <div className="contact__form mt-2">
              <div className="col-md-5">
                <label>
                  Name{" "}
                  <sup>
                    {" "}
                    <i
                      class="fa-solid fa-asterisk"
                      style={{ color: "#dc0000", fontSize: "10px" }}
                    ></i>
                  </sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name "
                  value={name}
                  required
                  onChange={handleChange("name")}
                />
              </div>
              <div className="col-md-5">
                <label>
                  Email
                  <sup>
                    {" "}
                    <i
                      class="fa-solid fa-asterisk"
                      style={{ color: "#dc0000", fontSize: "10px" }}
                    ></i>
                  </sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  value={email}
                  required
                  onChange={handleChange("email")}
                />
              </div>
              <div className="col-md-5">
                <label>
                  Mobile Number
                  <sup>
                    {" "}
                    <i
                      class="fa-solid fa-asterisk"
                      style={{ color: "#dc0000", fontSize: "10px" }}
                    ></i>
                  </sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  required
                  placeholder="+91 xxxxx-xxxxx"
                  onChange={handleChange("mobile")}
                />
              </div>
              <div className="col-md-5">
                <label>
                  Message
                  <sup>
                    {" "}
                    <i
                      class="fa-solid fa-asterisk"
                      style={{ color: "#dc0000", fontSize: "10px" }}
                    ></i>
                  </sup>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  value={message}
                  required
                  onChange={handleChange("message")}
                />
              </div>
            </div>
            <div className="mt-5 text-right">
              <button className="btn" type="button" onClick={updatePassword}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Row>
    </section>
  );
}
