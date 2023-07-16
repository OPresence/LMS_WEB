import React from "react";
import Shape7 from "../../assests/shape/shape-7.png";
import Shape1 from "../../assests/shape/shape-1.png";

export default function CourseDetailBanner({ course = {} }) {
  return (
    <div
      className="section page-banner-section"
      style={{
        background: "linear-gradient(to right, #11998e80, #38ef7d8c)",
        minHeight: "350px",
        paddingTop: 0,
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
            {course?.title || ""}
          </h2>

          <p className="text" style={{ fontSize: "16px" }}>
            {course?.description || ""}
          </p>

          <div className="course-details-meta">
            <div className="meta-action">
              <div className="meta-author">
                <img src="assets/images/author-3.jpg" alt="Author" />
              </div>
              <div className="meta-name">
                <p className="name">{course?.instructor?.name || ""}</p>
              </div>
            </div>

            <div className="meta-action">
              <h5 className="date">
                Last Update: <span>2/12/2023</span>
              </h5>
            </div>
            <div className="meta-action">
              <div className="rating">
                <div className="rating-star">
                  <div className="rating-active"></div>
                </div>
                <span>({course?.rating || ""})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
