import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="container rounded bg-white profile__container mb-2">
      <div className="profile__wrapper">
        <div className="col-md-2 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5 ">
            <img
              className="rounded-circle mt-5"
              src="https://i.imgur.com/0eg0aG0.jpg"
              width="90"
            />
            <span className="font-weight-bold">Shivam</span>
            <span className="text-black-50">shivam12@gmail.com</span>
            {/* <span>United States</span> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-5">
            <div className="col-md-10 d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex flex-row align-items-center back">
                <i className="fas fa-long-arrow-left mr-1 mb-1"></i>
                <h6>Back to home</h6>
              </div>
              <h6 className="text-right back">
                <i class="fa-regular fa-pen-to-square"></i>Edit Profile
              </h6>
            </div>
            <div className="row mt-2 field__wrapper">
              <div className="col-md-5">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  //   value="John"
                />
              </div>
              <div className="col-md-5">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  //   value="Doe"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-md-5">
                <label>Eamil</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  //   value="john_doe12@bbb.com"
                />
              </div>
              <div className="col-md-5">
                <label>Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  //   value=""
                  placeholder="+91 xxxxx-xxxxx"
                />
              </div>
              <div className="col-md-2 ">
                <label>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="M / F"
                  //   value="D-113, right avenue block, CA,USA"
                />
              </div>
              <div className="col-md-2">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  min="16"
                  //   value="D-113, right avenue block, CA,USA"
                />
              </div>
            </div>
            <div className="mt-5 text-right">
              <button className="btn  profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
