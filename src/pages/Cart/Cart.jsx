import React from "react";
import { Container } from "reactstrap";

import Styles from "./cart.module.css";
import CartItems from "./CartItems";
import coursesData from "../../assests/courses.json";

export default function Cart() {
  return (
    <div className="section section-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <h2 className={Styles.header}>Shopping Cart</h2>
            <p>2 Courses in Cart</p>
            <div className={Styles.itemContainer}>
            {React.Children.toArray(
              coursesData.map((item) => (
                // <Col lg="4" md="6" sm="6">
                <CartItems key={item.id} item={item} />
                // </Col>
              ))
            )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-details-wrap">
              <div className="sidebar-details-video-description">
                <div className="sidebar-video">
                  <img
                    src="assets/images/courses/sidebar-video.jpg"
                    alt="video"
                  />
                  <a
                    href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk"
                    className="popup-video play"
                  >
                    <i className="fa fa-play"></i>
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
                      <i className="fas fa-sliders-h"></i> Level{" "}
                      <span>Expert</span>
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
                      <i className="far fa-user"></i> Enrolled{" "}
                      <span>4 Enrolled</span>
                    </li>
                  </ul>
                  <div className="field button-field login__button w-100">
                    <button style={{ padding: "10px" }}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
