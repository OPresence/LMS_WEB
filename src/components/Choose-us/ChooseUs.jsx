import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>SALIENT FEATURES OF OUR LEARNING PROGRAMS</p>
              {/* <h3 className="title">What you will learn</h3> */}
              <ul className="choose__content_list">
                <li className="flex">
                  <span>
                    <i class="fa-solid fa-circle"></i>
                  </span>{" "}
                  60 live sessions linked to real time scenarios of the market
                </li>
                <li className="flex">
                  <span>
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  Live trading with Mentors
                </li>
                <li className="flex">
                  <span>
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  Practical sessions to learn different tools & trading setups
                </li>
                <li className="flex">
                  <span>
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  Live assistance by professional traders who have an experience
                  of more than 7 years in the market
                </li>
                <li className="flex">
                  <span>
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  Doubt solving sessions by our experts
                </li>
                <li className="flex">
                  <span>
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  Proprietary Strategies
                </li>
                <li className="flex">
                  <span>
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  24/7 support by our team
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    className="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
