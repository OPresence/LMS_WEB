import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                The financial ladder is a Stock Market training institute that
                provides various courses at reasonable prices and extensive
                insight into the trading world. Our team is a carefully curated
                team of experienced traders who have been in the business for a
                long time. Hence, the in depth understanding that will be
                provided to you will help you in becoming better traders as the
                knowledge and skills that you will develop will be unmatched.
                The goal is to shape and nurture budding minds and provide them
                proper knowledge and access to material that will develop their
                analytical skills, inculcate record keeping habits, and a
                variety of strategies that will help them maximize their
                profits.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={900} duration={2} suffix="+" />
                    </span>
                    <p className="counter__title">MEMBERS</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={400} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Students</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={60} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">LIVE SESSIONS</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  {/* <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
