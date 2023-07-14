import React from "react";

export default function CoursesBanner() {
  return (
    <div
      className="section page-banner-section"
      style={{
        background: "linear-gradient(to right, #11998e80, #38ef7d8c)",
        minHeight: "300px",
        paddingTop: "35px",
      }}
    >
      <div className="shape-1">
        <img src="assets/images/shape/shape-7.png" alt="" />
      </div>
      <div className="shape-2">
        <img src="assets/images/shape/shape-1.png" alt="" />
      </div>
      <div className="shape-3"></div>
      <div className="container">
        <div className="course-details-banner-content">
          <h2 className="title" style={{ fontSize: "40px" }}>
            Explore Our Courses
          </h2>
          <p className="text" style={{ fontSize: "20px" }}>
            Expand your knowledge and skills with our wide range of courses.
          </p>
        </div>
      </div>
    </div>
  );
}
