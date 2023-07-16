import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import CourseCard from "./CourseCard";
import coursesData from "../../assests/courses";

const Courses = () => {
  return (
    <section className="mt-5 mb-5">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Top Selling Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn flex">
                  Explore courses
                  <i
                    class="fa-solid fa-arrow-right-long"
                    style={{ color: "#fff", marginLeft: "5px" }}
                  ></i>
                </button>
              </div>
            </div>
          </Col>
          {React.Children.toArray(
            coursesData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <CourseCard key={item.id} course={item} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
