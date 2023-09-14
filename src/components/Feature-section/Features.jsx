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
                <div><img src={Experience} /></div>
                <h6>Cummilative trading experience of 20+ years</h6>
              </div>
              <div className="single__feature__back">
                <h6>
                  Twenty years of trading experience is not just a milestone;
                  it's a testament to the wisdom gained through both triumphs
                  and losses”
                </h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center simplified-curriculum single_feature_orange">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div><img src={Headset}></img></div>
                <h6>Most simplified and comprehensive curriculum</h6>
              </div>
              <div className="single__feature__back">
                <h6>
                  The most effective trading program is one that simplifies the
                  complex, making it accessible to all, and provides a
                  comprehensive foundation for success in the markets
                </h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center certified-expert single_feature_blue">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div><img src={Award}></img></div>
                <h6>Certified Expert: Top B-Schools, CFA, NISM, and NSE.</h6>
              </div>
              <div className="single__feature__back">
                <h6>
                  In the realm of trading education, the guidance of Certified
                  Experts from Top B-Schools, CFA, NISM, and NSE is the
                  lighthouse that leads aspiring traders
                </h6>
              </div>
            </div>
          </div>

          <div className="single__feature text-center single_feature_orange">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div><img src={Book}></img></div>
                <h6>Trading challenges with Cash Prizes</h6>
              </div>
              <div className="single__feature__back">
                <h6>
                  Unlock your trading potential and compete for cash prizes in
                  our trading challenges. Turn your skills into rewards and
                  discover the thrill of trading like never before.
                </h6>
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
                <h6>
                  Live trading not only helps you backtest your system but also
                  helps you implement in real time and make the most out of it
                </h6>
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
                <h6>
                  A good trader is someone who is on the path of continuous
                  learning. Live doubt solving with mentors will help you gain
                  insights on your mistakes and help improve yourself
                </h6>
              </div>
            </div>
          </div>
          <div className="single__feature text-center access_traders single_feature_orange">
            <div className="single__feature__inner">
              <div className="single__feature__front">
                <div><img src={Trading}></img></div>
                <h6>Access to Traders den (Community)</h6>
              </div>
              <div className="single__feature__back">
                <h6>
                  "In trading, your community is your compass. Surround yourself
                  with a group of peers who inspire, educate, and challenge you
                  to be your best trader.
                </h6>
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
                <h6>
                  Stay up to date with the ever changing market with our
                  exclusive student portal which will help you be updated with
                  the evolving concepts.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
