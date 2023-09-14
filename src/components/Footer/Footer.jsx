import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.png";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Pricing",
    url: "/",
  },
  {
    display: "About US",
    url: "/about",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const footerSocialLinks = [
  {
    display: "Facebook",
    url: "/",
  },
  {
    display: "Instagram",
    url: "/",
  },
  {
    display: "Twitter",
    url: "/",
  },
  {
    display: "Linkedin",
    url: "/",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    display: "Refund Policy",
    url: "/refund-policy",
  },
  {
    display: "Terms & Conditions",
    url: "/terms-and-condition",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Container>
          <Row>
            <Col
              lg="3"
              md="6"
              className="mb-4 logo__wrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className=" d-flex align-items-center gap-1">
                <img src={logo} width={"120px"} alt="Logo" />
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{ lineHeight: "1.8rem" }}>
                  Made with <span style={{ color: "red" }}>&hearts;</span> India
                </p>
              </div>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <ListGroup className="link__list">
                {footerQuickLinks.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 ps-0 link__item"
                  >
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <ListGroup className="link__list">
                {footerSocialLinks.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 ps-0 link__item"
                  >
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <ListGroup className="link__list">
                {footerInfoLinks.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 ps-0 link__item"
                  >
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            {/* <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Pune, India</p>
            <p> Phone: +91 XXXXX-XXXXX </p>
            <p>Email: Learners@gmail.com</p>
          </Col> */}
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
