import React, { useContext } from "react";

import { UserContext } from "../../userContext";
import "./payment.css";

export default function Payment() {
  return (
    <div class="payment_container bg-light d-md-flex align-items-center">
      <div class="card box1 shadow-sm p-md-5 p-md-5 p-4">
        <div class="fw-bolder mb-4">
          <i class="fas fa-indian-rupee-sign" style={{ color: "#baf0c3" }}></i>
          <span class="ps-1">599,00</span>
        </div>
        <div class="d-flex flex-column">
          <div class="d-flex align-items-center justify-content-between text">
            <span class="">Commission</span>
            <span>
              <i
                class="fas fa-indian-rupee-sign"
                style={{ color: "#baf0c3" }}
              ></i>
              <span class="ps-1">1.99</span>
            </span>
          </div>
          <div class="d-flex align-items-center justify-content-between text mb-4">
            <span>Total</span>
            <span>
              <i
                class="fas fa-indian-rupee-sign"
                style={{ color: "#baf0c3" }}
              ></i>
              <span class="ps-1">600.99</span>
            </span>
          </div>
          <div class="border-bottom mb-4"></div>
          <div class="d-flex flex-column mb-5">
            <span class="far fa-file-alt text">
              <span class="ps-2">Invoice ID:</span>
            </span>
            <span class="ps-3">SN8478042099</span>
          </div>
          {/* <div class="d-flex flex-column mb-5">
            <span class="far fa-calendar-alt text">
              <span class="ps-2">Next payment:</span>
            </span>
            <span class="ps-3">22 july,2018</span>
          </div> */}
          <div
            class="d-flex align-items-center justify-content-between position-absolute text mt-5"
            style={{ bottom: "20px" }}
          >
            <div class="d-flex flex-column text fw-regular">
              <span>
                <i class="fa-solid fa-headset" style={{ color: "#baf0c3" }}></i>
                {"  "}
                Customer Support (24/7){" "}
              </span>{" "}
              <span className="fw-bold">1800 123 1272 </span>
            </div>
            {/* <div class="btn btn-primary rounded-circle">
              <i class="fa-solid fa-headset" style={{ color: "#baf0c3" }}></i>
            </div> */}
          </div>
        </div>
      </div>
      <div class="card box2 shadow-sm">
        <div class="d-flex align-items-center justify-content-between p-md-5 p-4">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="h5 m-0">Accepted Payment Methods</span>
        </div>
        <ul class="nav nav-tabs mb-3 px-md-4 px-2">
          <li class="nav-item">
            <a class="nav-link px-2 active" aria-current="page" href="#">
              Credit Card
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link px-2" href="#">
              Mobile Payment
            </a>
          </li>
          <li class="nav-item ms-auto">
            <a class="nav-link px-2" href="#">
              + More
            </a>
          </li> */}
        </ul>
        {/* <div class="px-md-5 px-4 mb-4 d-flex align-items-center">
          <div class="btn btn-success me-4">
            <span class="fas fa-plus"></span>
          </div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-primary" for="btnradio1">
              <span class="pe-1">+</span>5949
            </label>
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary" for="btnradio2">
              <span class="lpe-1">+</span>3894
            </label>
          </div>
        </div> */}
        <form>
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Credit Card</span>
                <div class="inputWithIcon">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                  <span class="">
                    <img
                      loading="eager"
                      src="https://www.freepnglogos.com/uploads/mastercard-png/what-are-the-visa-and-mastercard-limited-acceptance-programs-8.png"
                      alt="visa master-card logo"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                <span>
                  Expiration<span class="ps-1">Date</span>
                </span>
                <div class="inputWithIcon">
                  <input type="text" class="form-control" placeholder="05/20" />
                  <span class="fas fa-calendar-alt"></span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                <span>Code CVV</span>
                <div class="inputWithIcon">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="123"
                  />
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Name On Card</span>
                <div class="inputWithIcon">
                  <input
                    class="form-control text-uppercase"
                    type="text"
                    placeholder="Enter Name"
                  />
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="col-12 px-md-5 px-4 mt-3">
              <div class="btn btn-primary w-100">Pay $599.00</div>
              <br />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
