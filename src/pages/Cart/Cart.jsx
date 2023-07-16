import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import buyCourse from "./helper";
import { UserContext } from "../../userContext";
import Styles from "./cart.module.css";
import CartItems from "../../components/CartItem";
import Shape7 from "../../assests/shape/shape-7.png";
import Shape6 from "../../assests/shape/shape-6.png";
import Shape3 from "../../assests/shape/shape-3.png";
import Shape2 from "../../assests/shape/shape-2.png";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(UserContext);
  const [priceDetails, setPriceDetails] = useState({
    subtotal: 0,
    total: 0,
    roundOff: 0,
    taxes: 0,
    final: 0,
  });

  useEffect(() => {
    const subtotal = cartItems.reduce((value, item) => {
      value += item.price;
      return value;
    }, 0);
    const total = cartItems.reduce((value, item) => {
      value += item.price;
      return value;
    }, 0);

    const taxes = cartItems.reduce((value, item) => {
      value += item.price * 0.18;
      return value;
    }, 0);
    const final = total + taxes;

    setPriceDetails({ ...priceDetails, final, subtotal, total, taxes });
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeItem = (id) => {
    const filteredCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(filteredCartItems);
  };

  const makePayment = () => {
    buyCourse(cartItems)
      .then((res) => {
        if (res.status === 200) {
          navigate("/confirmation");
        }
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

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
              {!!cartItems.length
                ? "Your Shopping Cart"
                : "Your Cart is currently empty."}
            </h2>
            {!cartItems.length && (
              <p className="text" style={{ fontSize: "20px", fontWeight: 600 }}>
                Explore our wide range of products and start filling it with
                amazing finds!
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-8">
              <div className={Styles.itemContainer}>
                {!!cartItems.length &&
                  React.Children.toArray(
                    cartItems.map((item) => (
                      <CartItems
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                      />
                    ))
                  )}
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div
                className="sidebar-details-wrap"
                style={{ marginTop: "-380px" }}
              >
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
                        <span>{cartItems.length}</span>
                      </li>
                      <li>
                        Subtotal
                        <span>&#8377; {priceDetails.subtotal}</span>
                      </li>
                      <li>
                        Total
                        <span>&#8377; {priceDetails.total}</span>
                      </li>
                      <li>
                        Round Off
                        <span>&#8377; {priceDetails.roundOff}</span>
                      </li>
                      <li>
                        Taxes
                        <span>&#8377; {priceDetails.taxes}</span>
                      </li>
                    </ul>
                    <div className="price-wrap">
                      <span className="label">Total Price :</span>
                      <div className="price">
                        <span className="sale-price">
                          <i
                            class="fas fa-indian-rupee-sign"
                            style={{ fontSize: "20px" }}
                          ></i>{" "}
                          {priceDetails.final.toFixed(2)}
                        </span>
                        <span className="regular-price">
                          &#8377;{" "}
                          {(
                            priceDetails.final +
                            priceDetails.final * 0.15
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <br />
                    <div className="field button-field login__button w-100">
                      <button
                        style={{ padding: "10px" }}
                        // onClick={() => navigate("/payment")}
                        onClick={makePayment}
                      >
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
