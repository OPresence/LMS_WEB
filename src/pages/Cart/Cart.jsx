import React, { useEffect } from "react";

import Styles from "./cart.module.css";
import CartItems from "../../components/CartItem";
import coursesData from "../../assests/courses.json";
import Shape7 from "../../assests/shape/shape-7.png";
import Shape6 from "../../assests/shape/shape-6.png";
import Shape3 from "../../assests/shape/shape-3.png";
import Shape2 from "../../assests/shape/shape-2.png";

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="section page-banner-section"
        style={{
          background: "linear-gradient(to right, #11998e80, #38ef7d8c)",
          minHeight: "300px",
          paddingTop: "35px",
        }}
      >
        <div className="shape-1">
          <img src={Shape7} alt="" />
        </div>
        {/* <div className="shape-2">
          <img src={Shape2} alt="" />
        </div> */}
        <div className="shape-6">
          <img src={Shape6} alt="" />
        </div>
        <div className="shape-3">
          <img src={Shape3} alt="" />
        </div>
        <div className="container">
          <div className="course-details-banner-content">
            <h2 className="title" style={{ fontSize: "40px" }}>
              Your Shopping Cart
            </h2>
            {/* <p className="text" style={{ fontSize: "20px",fontWeight: 600 }}>
              3 Courses in Cart
            </p> */}
          </div>
        </div>
      </div>
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-8">
              <div className={Styles.itemContainer}>
                {React.Children.toArray(
                  coursesData.map((item) => (
                    <CartItems key={item.id} item={item} />
                  ))
                )}
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="sidebar-details-wrap">
                <div className="sidebar-details-video-description">
                  {/* <div className="sidebar-video">
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
                </div> */}
                  <div className="sidebar-description">
                    <ul className="description-list">
                      <li>
                        <i class="fas fa-chalkboard-user"></i> Total Courses
                        <span>3</span>
                      </li>
                      <li>
                        Subtotal
                        <span>&#8377; 400</span>
                      </li>
                      <li>
                        Total
                        <span>&#8377; 400</span>
                      </li>
                      <li>
                        Round Off
                        <span>&#8377; 0</span>
                      </li>
                      <li>
                        Taxes
                        <span>&#8377; 108</span>
                      </li>
                    </ul>
                    <div className="price-wrap">
                      <span className="label">Total Price :</span>
                      <div className="price">
                        <span className="sale-price">
                          <i class="fas fa-indian-rupee-sign"></i> 49.99
                        </span>
                        <span className="regular-price">&#8377;102</span>
                      </div>
                    </div>
                    <br />
                    <div className="field button-field login__button w-100">
                      <button style={{ padding: "10px" }}>
                        Proceed To Pay
                      </button>
                    </div>
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
