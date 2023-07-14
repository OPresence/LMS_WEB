import React from "react";
import sidebarVideoImg from "../../assests/images/graphics-design.png";

export default function SidebarDetail() {
  return (
    <div className="col-lg-4">
      <div className="sidebar-details-wrap">
        <div className="sidebar-details-video-description">
          <div className="sidebar-video">
            <img src={sidebarVideoImg} alt="video" />
            <a
              href="https://www.youtube.com/watch?v=OAZWXUkrjPc"
              className="popup-video play"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
          <div className="sidebar-description">
            <div className="price-wrap">
              <span className="label">Price :</span>
              <div className="price">
                <span className="sale-price">$49.99</span>
                <span className="regular-price">$102</span>
              </div>
            </div>
            <ul className="description-list">
              <li>
                <i className="flaticon-wall-clock"></i> Duration{" "}
                <span>52 mins</span>
              </li>
              <li>
                <i className="fas fa-sliders-h"></i> Level <span>Expert</span>
              </li>
              <li>
                <i className="far fa-file-alt"></i> Lectures{" "}
                <span>4 Lectures</span>
              </li>
              <li>
                <i className="fas fa-language"></i> Language{" "}
                <span>English</span>
              </li>
              <li>
                <i className="far fa-user"></i> Enrolled <span>4 Enrolled</span>
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
