import React from "react";
import sidebarVideoImg from "../../assests/images/graphics-design.png";

export default function SidebarDetail({ course }) {
  const imgPath = require(`../../assests/images/${course.imgUrl}`).default;
  return (
    <div className="col-lg-4">
      <div className="sidebar-details-wrap">
        <div className="sidebar-details-video-description">
          <div className="sidebar-video">
            <img src={imgPath} alt="video" />
            {/* <a
              href="https://www.youtube.com/watch?v=OAZWXUkrjPc"
              className="popup-video play"
            >
              <i className="fas fa-play"></i>
            </a> */}
          </div>
          <div className="sidebar-description">
            <div className="price-wrap">
              <span className="label">Price :</span>
              <div className="price">
                <span className="sale-price">
                  <i class="fas fa-indian-rupee-sign"></i> {course.price}
                </span>
                <span className="regular-price">&#8377;102</span>
              </div>
            </div>
            <ul className="description-list">
              <li>
                <i className="flaticon-wall-clock"></i> Duration{" "}
                <span> {course.duration}</span>
              </li>
              <li>
                <i className="fas fa-sliders-h"></i> Level{" "}
                <span> {course.level}</span>
              </li>
              <li>
                <i className="far fa-file-alt"></i> Lectures{" "}
                <span> {course.lectures}</span>
              </li>
              <li>
                <i className="fas fa-language"></i> Language{" "}
                <span> {course.language}</span>
              </li>
              <li>
                <i className="far fa-user"></i> Enrolled{" "}
                <span> {course.enrolled} Enrolled</span>
              </li>
            </ul>
            <div className="field button-field login__button w-100">
              <button style={{ padding: "10px" }}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
