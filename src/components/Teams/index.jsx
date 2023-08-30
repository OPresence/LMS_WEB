import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./platformFeatures.css";

const FeatureData = [
  {
    title: "Hannah Mika",
    desc: "CEO",
    icon: "fa-solid fa-chalkboard-user",
  },
  {
    title: "Daniel Peter",
    desc: "CEO",
    icon: "fa-solid fa-list-check",
  },
  {
    title: "Lars Mikkel",
    desc: "Head of Operations",
    icon: "fa-solid fa-book",
  },
  {
    title: "Denis Forner",
    desc: "Head of Product",
    icon: "fa-solid fa-medal",
  },
  {
    title: "Hannah Mika",
    desc: "CEO",
    icon: "fa-solid fa-chalkboard-user",
  },
  {
    title: "Daniel Peter",
    desc: "CEO",
    icon: "fa-solid fa-list-check",
  },
  {
    title: "Lars Mikkel",
    desc: "Head of Operations",
    icon: "fa-solid fa-book",
  },
  {
    title: "Denis Forner",
    desc: "Head of Product",
    icon: "fa-solid fa-medal",
  },
];

const Teams = () => {
  return (
    <section className="platform__features__section">
      <div className="section__header">
        <h2>Team</h2>
        {/* <p>Meet the people behind our magical product</p> */}
      </div>
      <br />
      <br />
      <br />
      <Container>
        <div className="wrapper">
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Hannah Mika</h6>
              <p>CEO</p>
            </div>
          </div>
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Daniel Peter</h6>
              <p>CEO</p>
            </div>
          </div>
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Lars Mikkel</h6>
              <p>Head of Operations</p>
            </div>
          </div>
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Denis Forner</h6>
              <p>Head of Product</p>
            </div>
          </div>
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Hannah Mika</h6>
              <p>CEO</p>
            </div>
          </div>
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Daniel Peter</h6>
              <p>CEO</p>
            </div>
          </div>
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Lars Mikkel</h6>
              <p>Head of Operations</p>
            </div>
          </div>
          <div className="single__feature text-center px-4">
            <div>
              <img src="" />
            </div>
            <div>
              <h6>Denis Forner</h6>
              <p>Head of Product</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Teams;
