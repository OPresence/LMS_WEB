import React from "react";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../../assests/images/hero.svg";
import "./hero-section.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                We maximize <br />
                YOUR FINANCIAL
                <br /> GROWTH <span className="growth__icon"></span>
              </h2>
              <h5 className="mb-4 title">
                Personal Mentorship Programs
              </h5>
              <Link to="/courses">
                <button className="btn hero__btn">Explorer Courses</button>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
