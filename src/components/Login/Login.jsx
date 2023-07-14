import React, { useState, useContext } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import login from "./helper";
import { Toast, ToastHeader, ToastBody } from "reactstrap";

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
      .catch((err) => setFormData({ ...formData, ["error"]: true }));
  };

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#f0f8ff" }}>
      <Toast isOpen={error} fade={true} className="right">
        <ToastHeader>Reactstrap</ToastHeader>
        <ToastBody>Invalid user and password!</ToastBody>
      </Toast>
      <div className="form login">
        <div className="form-content">
          <header style={{ lineHeight: 1}}>
            Log in to your personal account
          </header>
          <div className="form-link">
            <span>
              Don't have an account yet?{" "}
              <Link to="/sign-up" className="link signup-link">
                Create New
              </Link>
            </span>
          </div>
          {error && <p>Invalid user</p>}
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  width: "40px",
                  padding: "0 5px 0 10px",
                }}
              >
                <i
                  class="fa-solid fa-envelope"
                  style={{ color: "#6d5eff" }}
                ></i>
              </div>

              <input
                type="email"
                value={email}
                placeholder="Email"
                className="input"
                onChange={handleChange("email")}
              />
            </div>
            <div className="field input-field">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  width: "40px",
                  padding: "0 5px 0 10px",
                }}
              >
                <i class="fa-solid fa-lock" style={{ color: "#6d5eff" }}></i>
              </div>
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
          {/* <div className="form-link">
            <span>
              Don't have an account?{" "}
              <Link to="/sign-up" className="link signup-link">
                Signup
              </Link>
            </span>
          </div> */}
        </div>
        {/* <div className="line"></div> */}
        {/* <div className="media-options">
          <a href="#" className="field google">
            <img src={GoogleLogo} alt="Google logo" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}
