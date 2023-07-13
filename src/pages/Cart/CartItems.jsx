import React from "react";
import { Link } from "react-router-dom";
import imgUrl from "../../assests/images/web-development.png";

export default function CartItems(props) {
  const { title, lesson: instructor, students, rating } = props.item;
  return (
    <div className="flex w-100">
      <div className="course__img course__img__wrapper">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i>
            <span>By R-Tutorials Training</span>
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <span> Remove</span>
          </p>
        </div>
      </div>
    </div>
  );
}
