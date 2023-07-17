import React, { useState } from "react";
import { Link } from "react-router-dom";

import UpdateProfile from "./helper";
import { saveToLocalStorage } from "../../utils";
import Loader from "../Loader/Loader";

import "./profile.css";

export default function Profile() {
  const [userData, setUserData] = useState(() => {
    let userDetails = {};
    if (localStorage.getItem("userInfo")) {
      console.log(localStorage.getItem("userInfo"));
      userDetails = JSON.parse(localStorage.getItem("userInfo"));
    }

    return {
      firstName: userDetails?.name?.split(" ")[0] || "",
      lastName: userDetails?.name?.split(" ")[1] || "",
      name: userDetails?.name || "",
      email: userDetails?.email || "",
      mobile: userDetails?.mobile || "",
      age: userDetails?.age || "",
      gender: userDetails?.gender || "",
    };
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [error, setError] = useState(false);

  const { firstName, lastName, email, mobile, age, gender, name } = userData;

  const handleChange = (inputField) => (event) => {
    const value = event.target.value;
    let name = "";
    if (inputField === "firstName") {
      name = value + " " + lastName;
    }
    if (inputField === "lastName") {
      name = value + " " + lastName;
    }
    setUserData({ ...userData, [inputField]: value, name });
  };

  const updatePassword = () => {
    if (!gender.toLowerCase().includes(["male", "female"])) {
      setError("Please enter valid gender!");
      return;
    }
    setIsLoading(true);
    UpdateProfile(userData)
      .then((res) => {
        if (res.status === 200) {
          console.log({ res });
          saveToLocalStorage("userInfo", userData);
          setStatus({ error: false, message: "" });
          setIsEditable(false);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setStatus({ error: true, message: res.message });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setStatus({ error: true, message: err });
      });
  };

  return (
    <div className="container rounded bg-white profile__container mb-2">
      <Loader show={isLoading} />
      <div className="profile__wrapper">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
            {/* <img
              className="rounded-circle mt-5"
              src="https://i.imgur.com/0eg0aG0.jpg"
              width="90"
            /> */}
            <i
              class="fa-solid fa-user-tie"
              style={{ fontSize: "80px", color: "#3e3e3e" }}
            ></i>
            <span className="font-weight-bold">{name}</span>
            <span className="text-black-50">{email}</span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="px-5">
            <div className="col-md-12 d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex flex-row align-items-center back">
                <Link
                  to="/"
                  className="d-flex flex-row align-items-center back"
                >
                  <i className="fas fa-long-arrow-left mr-1 mb-1"></i>
                  <h6>Back to home</h6>
                </Link>
              </div>
              <h6
                className="text-right back"
                onClick={() => setIsEditable(true)}
              >
                <i class="fa-regular fa-pen-to-square"></i>Edit Profile
              </h6>
            </div>
            {error && !isLoading && <h6 className="text-right">{error}</h6>}
            <div className="mt-2 field__wrapper">
              <div className="col-md-5">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  value={firstName}
                  {...(!isEditable && { disabled: true })}
                  // disable={isEditable}
                  onChange={handleChange("firstName")}
                />
              </div>
              <div className="col-md-5">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  placeholder="Last Name"
                  {...(!isEditable && { disabled: true })}
                  onChange={handleChange("lastName")}
                />
              </div>
              <div className="col-md-5">
                <label>Eamil</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  value={email}
                  {...(!isEditable && { disabled: true })}
                  onChange={handleChange("email")}
                />
              </div>
              <div className="col-md-5">
                <label>Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  {...(!isEditable && { disabled: true })}
                  placeholder="+91 xxxxx-xxxxx"
                  onChange={handleChange("mobile")}
                />
              </div>
              <div className="col-md-3">
                <label>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Male / Female"
                  value={gender}
                  {...(!isEditable && { disabled: true })}
                  onChange={handleChange("gender")}
                />
              </div>
              <div className="col-md-2">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  min="16"
                  value={age}
                  {...(!isEditable && { disabled: true })}
                  onChange={handleChange("age")}
                />
              </div>
            </div>
            <div className="mt-5 text-right">
              <button
                className="btn  profile-button"
                type="button"
                onClick={updatePassword}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
