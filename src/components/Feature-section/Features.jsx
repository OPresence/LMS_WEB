import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "PERSONAL TRADES TAKEN BY MENTORS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "fa-solid fa-users",
  },

  {
    title: "LIVE MARKET SETUPS & DISCUSSIONS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "fa-solid fa-users-gear",
  },
  {
    title: "PREMIUM MEMBERSHIP ACCESS FOR THE DURATION OF COURSE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "fa-solid fa-award",
  },
];

const Features = () => {
  return (
    <section className="features__section">
      <Container>
        <div className="wrapper">
          {FeatureData.map((item, index) => (
            <Col lg="3" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                {/* <p>{item.desc}</p> */}
              </div>
            </Col>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
