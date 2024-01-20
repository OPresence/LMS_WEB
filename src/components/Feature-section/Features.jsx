import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

import Laptop from "../../assests/laptop.svg";
import Trading from "../../assests/trading.svg";
import Experience from "../../assests/experience.svg";
import Video from "../../assests/video.svg";
import Book from "../../assests/book.svg";
import Award from "../../assests/awards.svg";
import Users from "../../assests/users.svg";
import Headset from "../../assests/headset.svg";

const FeatureData = [
  {
    title: "Cummilative trading experience of 20+ years",
    icon: Experience,
  },

  {
    title: "Most simplified and comprehensive curriculum",
    icon: "fa-solid fa-headset",
  },
  {
    title: "Certified Expert: Top B-Schools, CFA, NISM, and NSE.",
    icon: "fa-solid fa-award",
  },
  {
    title: "Trading challenges with Cash Prizes",
    icon: "fa-solid fa-award",
  },
  {
    title: "Live trading during market hours",
    icon: "fa-solid fa-users",
  },
  {
    title: "Doubt solving and strategy review sessions",
    icon: "fa-solid fa-award",
  },
  {
    title: "Access to Traders den (Community)",
    icon: "fa-solid fa-award",
  },
  {
    title: "Student Portal",
    icon: "fa-solid fa-award",
  },
];

const Features = () => {
  return (
    <section className="features__section">
      <Container>
        <div className="wrapper">
          <div className="text-center edge-define-us">
            <div className="sections__header">
              <h3
                className="sections__title"
                style={{
                  color: "black",
                  textTransform: "uppercase ",
                  fontSize: "48px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                The Edge that Define Us
              </h3>
            </div>
          </div>
          <div className="single__feature text-center single_feature_blue">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>{/* <img src={Experience} /> */}</div>
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center simplified-curriculum single_feature_orange">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>{/* <img src={Headset}></img> */}</div>
                <h6>Most simplified and comprehensive curriculum</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center certified-expert single_feature_blue">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>{/* <img src={Award}></img> */}</div>
                <h6>Certified Expert: Top B-Schools, CFA, NISM, and NSE.</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>

          <div className="single__feature text-center single_feature_orange">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>{/* <img src={Book}></img> */}</div>
                <h6>Trading challenges with Cash Prizes</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>

          <div className="single__feature text-center">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>
                  <img src={Users}></img>
                </div>
                <h6>Live trading during market hours</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center doubt__solving single_feature_blue">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>
                  <img src={Video}></img>
                </div>
                <h6>Doubt solving and strategy review sessions</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center access_traders single_feature_orange">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>{/* <img src={Trading}></img> */}</div>
                <h6>Access to Traders den (Community)</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div>
                  <img src={Laptop}></img>
                </div>
                <h6>Student Portal</h6>
              </div>
              <div className="single__feature__back">
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
