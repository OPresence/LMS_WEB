import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./hero-section.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row className="wrapper">
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                We Simplify <br />
                Trading for
                <br /> You.
              </h2>
              <h5 className="mb-4 title">Trading, minus the Complexity</h5>
              <Link to="/courses">
                <button className="btn hero__btn">
                  Book your guidance session
                </button>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="video__wrapper"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
