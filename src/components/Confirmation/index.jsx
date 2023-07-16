import React from "react";
import "./confirmation.css";

export default function Confirmation() {
  return (
    <div class="container mt-5 d-flex justify-content-center confirmation">
      <div class="card p-4 mt-3">
        <div class="first d-flex justify-content-between align-items-center mb-3">
          <div class="info">
            <span class="d-block name">Thank you, Alex</span>
            <span class="order">Order - 4554645</span>
          </div>

          <svg
            width="60px"
            height="60px"
            viewBox="0 0 133 133"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="check-group"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <circle
                id="filled-circle"
                fill="#78B348"
                cx="66.5"
                cy="66.5"
                r="54.5"
              ></circle>
              <circle
                id="white-circle"
                fill="#FFFFFF"
                cx="66.5"
                cy="66.5"
                r="55.5"
              ></circle>
              <circle
                id="outline"
                stroke="#78B348"
                stroke-width="4"
                cx="66.5"
                cy="66.5"
                r="54.5"
              ></circle>
              <polyline
                id="check"
                stroke="#FFFFFF"
                stroke-width="4"
                points="41 70 56 85 92 49"
              ></polyline>
            </g>
          </svg>
        </div>
        <div class="detail">
          <span class="d-block summery">
            Your order has been dispatched. we are delivering you order.
          </span>
        </div>
        <hr />
        <div class="text">
          <span class="d-block new mb-1">Alex Dorlew</span>
        </div>
        <span class="d-block address mb-3">
          672 Conaway Street Bryantiville Massachusetts 02327
        </span>
        <div class="  money d-flex flex-row mt-2 align-items-center">
          <img src="https://i.imgur.com/ppwgjMU.png" width="20" />

          <span class="ml-2">Cash on Delivery</span>
        </div>
        <div class="last d-flex align-items-center mt-3">
          <span class="address-line">CHANGE MY DELIVERY ADDRESS</span>
        </div>
      </div>
    </div>
  );
}
