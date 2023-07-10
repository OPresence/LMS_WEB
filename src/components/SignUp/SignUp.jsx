import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext";

import { saveToLocalStorage } from "../../utils";

import GoogleLogo from "../../assests/images/google_logo.svg";
import register from "./helper";

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile:'',
    error: false,
  });
  const { setIsLoggedIn } = useContext(AuthContext);
  const { name, email, password, confirmPassword } = userData;

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    register(payload)
      .then((res) => {
        if (res?.data) {
          setUserData({ ...formData, error: false });
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
        <header>Signup</header>
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
          <div className="field input-field">
            <input
              type="text"
              placeholder="Mobile"
              className="input"
              value={name}
              onChange={handleChange("mobile")}
            />
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
      {/* <div className="line"></div>
      <div className="media-options">
        <a href="#" className="field google">
          <img src={GoogleLogo} alt="Google Logo" className="google-img" />
          <span>Login with Google</span>
        </a>
      </div> */}
    </div>
  );
}
