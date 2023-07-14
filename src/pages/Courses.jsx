import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import CourseCard from "../components/Courses-section/CourseCard";
import Loader from "../components/Loader/Loader";

import courseImg1 from "../assests/images/web-design.png";
import courseImg2 from "../assests/images/graphics-design.png";
import courseImg3 from "../assests/images/ui-ux.png";
import Shape7 from "../assests/shape/shape-7.png";
import Shape1 from "../assests/shape/shape-1.png";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Row>
        <Col lg="12" className="mb-5">
          <div className="course__top d-flex justify-content-between align-items-center">
            <div className="course__top__left w-100">
              <div
                className="section page-banner-section"
                style={{
                  background: "linear-gradient(to right, #11998e80, #38ef7d8c)",
                  minHeight: "300px",
                  paddingTop: "35px",
                }}
              >
                <div className="shape-1">
                  <img src={Shape7} alt="" />
                </div>
                <div className="shape-2">
                  <img src={Shape1} alt="" />
                </div>
                <div className="shape-3"></div>
                <div className="container">
                  <div className="course-details-banner-content">
                    <h2 className="title" style={{ fontSize: "40px" }}>
                      Explore Our Courses
                    </h2>
                    <p className="text" style={{ fontSize: "20px" }}>
                      Expand your knowledge and skills with our wide range of
                      courses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          lg="12"
          className="mb-5 flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {React.Children.toArray(
            coursesData.map((item) => (
              <Col lg="3" md="4" sm="12">
                <CourseCard key={item.id} item={item} />
              </Col>
            ))
          )}
        </Col>
      </Row>
    </section>
  );
}
