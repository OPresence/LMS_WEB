import React from "react";

export default function CourseDetailBanner() {
  return (
    <div
      className="section page-banner-section"
      style={{background:"linear-gradient(to right, #11998e80, #38ef7d8c)"}}
      // style="background-image: url(assets/images/bg/page-banner.jpg);"
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
          <h2 className="title">
            Getting Started with the Linux Command Line{" "}
          </h2>

          <p className="text">
            Learn Python like a Professional Start from the basics and go all
            the way to creating your own applications and games
          </p>

          <div className="course-details-meta">
            <div className="meta-action">
              <div className="meta-author">
                <img src="assets/images/author-3.jpg" alt="Author" />
              </div>
              <div className="meta-name">
                <p className="name">Adam Helen</p>
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
                <span>(4.5)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
