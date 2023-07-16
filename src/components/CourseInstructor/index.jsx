import React from "react";

export default function CourseInstructor({ course }) {
  const imgPath =
    course?.instructor?.imgUrl &&
    require(`../../assests/images/${course.instructor.imgUrl}`).default;

  return (
    <div className="course-instructor">
      <h3 className="title">Course Instructor</h3>

      <div className="instructor-profile">
        <div className="profile-images">
          <img src={imgPath} alt="author" />
        </div>
        <div className="profile-content">
          <h5 className="name">{course?.instructor?.name}</h5>

          <div className="profile-meta">
            <div className="rating">
              <div className="rating-star">
                <div className="rating-active" style={{ width: "100%" }}></div>
              </div>
              <span>({course?.instructor?.rating})</span>
            </div>
            <span className="meta-action">
              <i className="fas fa-play-circle"></i>{" "}
              {course?.instructor?.tutorials} Tutorials
            </span>
            <span className="meta-action">
              <i className="fas fa-user"></i> {course?.instructor?.students}{" "}
              Students
            </span>
          </div>
          <p>{course?.instructor?.overview}</p>
        </div>
      </div>
    </div>
  );
}
