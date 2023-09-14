import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import Uizard from "../../assests/uizard.png";
import contact from "./helper";
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
        <div className="mb-5">
          <div className="wrapper">
            <div className="section__header">
              <h2 className="title">Contact Us</h2>
              <p>Explore the future with us. Feel free to get in touch.</p>
            </div>
            <div className="content__wrapper">
              <div className="image">
                <img src={Uizard} />
              </div>
              <div className="contact__form__container">
                <div className="contact__form mt-2">
                  <div className="form__item">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name "
                      value={name}
                      required
                      onChange={handleChange("name")}
                    />
                  </div>
                  <div className="form__item">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="abc@gmail.com"
                      value={email}
                      required
                      onChange={handleChange("email")}
                    />
                  </div>

                  <div className="form__item">
                    <label>Phone</label>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      value={mobile}
                      required
                      onChange={handleChange("mobile")}
                    />
                  </div>
                  <div className="form__item">
                    <label>Message</label>
                    <textarea
                      type="text"
                      placeholder="Message"
                      value={message}
                      required
                      onChange={handleChange("message")}
                    />
                  </div>
                </div>
                <button className="btn" type="button" onClick={updatePassword}>
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </section>
  );
}
