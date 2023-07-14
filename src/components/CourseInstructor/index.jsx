import React from "react";

export default function CourseInstructor() {
  return (
    <div className="course-instructor">
      <h3 className="title">Course Instructor</h3>

      <div className="instructor-profile">
        <div className="profile-images">
          <img src="assets/images/author-5.jpg" alt="author" />
        </div>
        <div className="profile-content">
          <h5 className="name">Alena Hedge</h5>

          <div className="profile-meta">
            <div className="rating">
              <div className="rating-star">
                <div className="rating-active" style={{ width: "100%" }}></div>
              </div>
              <span>(4.6)</span>
            </div>
            <span className="meta-action">
              <i className="fas fa-play-circle"></i> 10 Tutorials
            </span>
            <span className="meta-action">
              <i className="fas fa-user"></i> 134 Students
            </span>
          </div>

          <p>
            World-class training and development programs developed by top
            teachers. Build skills with courses, certificates, and degrees
            online from world-class universities{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
