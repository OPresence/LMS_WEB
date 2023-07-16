import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  console.log({course})
  const imgPath =
    require(`../../assests/images/${course.imgUrl}`).default;
  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgPath} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{course.title}</h6>
        <span>
          Instructor: <strong>{course.instructor.name}</strong>
        </span>
        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {course.lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {course.students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {course.rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <Link to={`/courses/${course.id}`}> View Course</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
