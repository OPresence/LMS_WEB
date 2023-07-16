import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../userContext";

import imgUrl from "../../assests/images/web-development.png";

export default function CartItem(props) {
  const { _id, title, instructor, students, rating, price } = props.item;
  const { removeItem } = props;

  return (
    <div className="flex w-100">
      <div className="course__img course__img__wrapper">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details cart__course w-75">
        <div className="d-flex justify-content-between align-items-start">
          <h6 className="course__title" style={{ width: "80%" }}>
            {title}
          </h6>
          <p className="d-flex align-items-center gap-1">
            <span className="amount">&#8377; {price}</span>
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i>
            <span>{instructor?.name}</span>
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <div className="flex">
            <p className="rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i> {rating}K
            </p>
            <p className="students d-flex align-items-center gap-1">
              <i className="ri-user-line"></i> {students}K
            </p>
          </div>

          <p
            className="enroll d-flex align-items-center gap-1 danger"
            style={{ cursor: "pointer" }}
            onClick={() => removeItem && removeItem(_id)}
          >
            <i className="fas fa-xmark" style={{ color: "red" }}></i>
            <span> Remove</span>
          </p>
        </div>
      </div>
    </div>
  );
}
