import React from "react";
import { Container, Row, Col } from "reactstrap";

import Shape7 from "../../assests/shape/shape-7.png";
import Shape1 from "../../assests/shape/shape-1.png";
import './contact.css'

export default function Contact() {
  return (
    <section>
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
        <Col lg="10" className="mb-5">
          <div className="px-5 contact__form__container">
            <div className="contact__form mt-2">
              <div className="col-md-5">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name "
                  //   value="John"
                />
              </div>
              <div className="col-md-5">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  //   value="john_doe12@bbb.com"
                />
              </div>
              <div className="col-md-5">
                <label>Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  //   value=""
                  placeholder="+91 xxxxx-xxxxx"
                />
              </div>
              <div className="col-md-5">
                <label>Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  //   value="John"
                />
              </div>
            </div>
            <div className="mt-5 text-right">
              <button className="btn  profile-button" type="button">
                Submit
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
