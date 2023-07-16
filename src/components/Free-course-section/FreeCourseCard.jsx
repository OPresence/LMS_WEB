import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title, instructor, students, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="single__free__course">
        <div className="free__course__img mb-3">
          <img src={imgUrl} alt="" className="w-100" />
          {/* <button className="btn free__btn">Free</button> */}
        </div>

        <div className="free__course__details">
          <h6 className="mb-0">{title}</h6>
          <p className="mb-0">
            <b>Instructor</b> : {instructor}
          </p>
          <div className=" d-flex align-items-center gap-5 w-100">
            <span className=" d-flex align-items-center gap-2">
              <i className="ri-user-line"></i> {students}k
            </span>
            <span className=" d-flex align-items-center gap-2">
              <i className="ri-star-fill"></i> {rating}k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
