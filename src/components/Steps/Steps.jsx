import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./steps.css";
import Uizard from "../../assests/steps.png";

const Steps = () => {
  return (
    <section className="steps_wrapper">
      <div className="step_header">
        <div className="image__wrapper">
          <img src={Uizard} />
        </div>
        <br />
        <div className="header__content">
          <h2>Talk to a pro-trader now!</h2>
          <p>Just 2 simple steps to optimize your company operations.</p>
        </div>
      </div>
      <div className="step_container">
        <div className="steps">
          <h3>Step 1</h3>
          <p>
            Reach out to one of our specialists, and have short introduction
            session.
          </p>
        </div>
        <div className="steps_divider__line"></div>
        <div className="steps">
          <h3>Step 2</h3>
          <p>
            Our specialist will prepare personalized package suitable for your
            needs.
          </p>
        </div>
        <div className="steps">
          <button className="step_header signup__btn">
            <span>Sign up now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Steps;
