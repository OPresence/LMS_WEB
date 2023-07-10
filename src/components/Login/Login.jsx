import React, { useState, useContext } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import login from "./helper";
import GoogleLogo from "../../assests/images/google_logo.svg";

import { AuthContext } from "../../authContext";
import { saveToLocalStorage } from "../../utils";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: false,
  });
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const { email, password, error } = formData;

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    login(payload)
      .then((res) => {
        if (res?.data) {
          setFormData({ ...formData, error: false });
          saveToLocalStorage("authToken", res.data.authToken);
          setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        {error && <p>Invalid user</p>}
        <form onSubmit={handleSubmit}>
          <div className="field input-field">
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="input"
              onChange={handleChange("email")}
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="password"
              onChange={handleChange("password")}
            />
            <i className="bx bx-hide eye-icon"></i>
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass">
              Forgot password?
            </a>
          </div>
          <div className="field button-field">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Don't have an account?{" "}
            <Link to="/sign-up" className="link signup-link">
              Signup
            </Link>
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="media-options">
        <a href="#" className="field google">
          <img src={GoogleLogo} alt="Google logo" className="google-img" />
          <span>Login with Google</span>
        </a>
      </div>
    </div>
  );
}
