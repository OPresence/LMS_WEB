import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext";

import { saveToLocalStorage } from "../../utils";
import Gender from "./Gender";
import register from "./helper";

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "shivamas110",
    email: "shivam1asd21212213@gmail.com",
    password: "shivam123",
    confirmPassword: "shivam123",
    mobile: "9087678984",
    gender: "Male",
    error: false,
  });

  const setGender = (value) => {
    setUserData({ ...userData, ["gender"]: value });
  };
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const { name, email, password, confirmPassword, mobile, gender } = userData;

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      return;
    }
    const payload = {
      email,
      password,
      mobile,
      gender,
      name,
    };
    register(payload)
      .then((res) => {
        if (res?.status === 200) {
          setUserData({ ...userData, error: false });
          saveToLocalStorage("authToken", res.data.authToken);
          setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="form">
      <div className="form-content">
        <header>Create your account</header>
        <form onSubmit={handleSubmit}>
          <div className="field input-field">
            <input
              type="text"
              placeholder="Name"
              className="input"
              value={name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="field input-field">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="flex">
            {/* <div className="field input-field w-auto">
              <Gender gender={gender} setGender={setGender} />
            </div> */}
            <div className="field input-field">
              <input
                type="text"
                placeholder="Mobile"
                className="input"
                value={mobile}
                onChange={handleChange("mobile")}
              />
            </div>
          </div>

          <div className="field input-field">
            <input
              type="password"
              placeholder="Create password"
              className="password"
              value={password}
              onChange={handleChange("password")}
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Confirm password"
              className="password"
              value={confirmPassword}
              onChange={handleChange("confirmPassword")}
            />
            <i className="bx bx-hide eye-icon"></i>
          </div>
          <div className="field button-field">
            <button>Signup</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="link login-link">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
