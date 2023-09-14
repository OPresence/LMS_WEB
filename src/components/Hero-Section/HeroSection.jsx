import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import "./hero-section.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [toggleText, setToggleText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleText((prevToggle) => !prevToggle);
    }, 2000); // Toggle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero__section"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Container>
        <Row className="wrapper">
          <Col lg="6" md="6">
            <div className="hero__content">
              <div class="text__content">
                <div class="content__container">
                  <p class="content__container__text hero__title">
                    We Simplify
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="content">
                  <div class="content__container">
                    <ul class="content__container__list">
                      <li class="content__container__list__item">Trading</li>
                      <li class="content__container__list__item">Investment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="text__content">
                <div class="content__container">
                  <p class="content__container__text hero__title">for You.</p>
                </div>
              </div>
              <h5 className="mb-4 title">
                {/* {toggleText ? "Trading" : "Investment"}, minus the Complexity */}
                <h5 className="mb-4 title">Trading, minus the Complexity</h5>
              </h5>
              <Link to="/contact">
                <button className="hero__btn">
                  <span> Book your guidance session</span>
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
