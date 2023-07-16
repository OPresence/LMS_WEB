import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "reactstrap";

import { UserContext } from "../userContext";

import CourseCard from "../components/Courses-section/CourseCard";
import Shape7 from "../assests/shape/shape-7.png";
import Shape1 from "../assests/shape/shape-1.png";
import getAllCourses from "../components/Courses-section/helper";

export default function Courses() {
  const [courseList, setCourseList] = useState([]);
  const { setCourses } = useContext(UserContext);

  useEffect(() => {
    getAllCourses().then((res) => {
      if (res.status === 200) {
        setCourseList(res.data.courses);
        setCourses(res.data.courses);
      }
    });
  }, []);

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
        <Col lg="10" className="mb-5 course__list">
          {React.Children.toArray(
            courseList.map((item) => (
              <CourseCard key={item._id} course={item} />
            ))
          )}
        </Col>
      </Row>
    </section>
  );
}
