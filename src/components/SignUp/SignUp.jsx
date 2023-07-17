import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext";

import Loader from "../Loader/Loader";
import { saveToLocalStorage } from "../../utils";
import register from "./helper";

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    gender: "",
    error: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);
  const { name, email, password, confirmPassword, mobile, gender, error } =
    userData;

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setUserData({ ...userData, error: "Password does not match!" });
      return;
    }
    const payload = {
      email,
      password,
      mobile,
      gender,
      name,
    };
    setIsLoading(true);
    register(payload)
      .then((res) => {
        if (res?.status === 200) {
          setUserData({ ...userData, error: false });
          const { authToken, ...user } = res.data;
          saveToLocalStorage("authToken", authToken);
          saveToLocalStorage("userInfo", user);
          setIsLoggedIn(true);
          setIsLoading(false);
          navigate("/");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setUserData({ ...userData, ["error"]: "Failed to create user!" });
      });
  };

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#f0f8ff" }}>
      <Loader show={isLoading} />
      <div className="form">
        <div className="form-content">
          <div style={{ textAlign: "center" }}>
            <header style={{ lineHeight: 1 }}>Join our community</header>
            <div className="form-link">
              <span>Register your account now!</span>
            </div>
          </div>
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
                <i class="fa-solid fa-user" style={{ color: "#6d5eff" }}></i>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={name}
                onChange={handleChange("name")}
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
                <i
                  class="fa-solid fa-envelope"
                  style={{ color: "#6d5eff" }}
                ></i>
              </div>
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
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    width: "40px",
                    padding: "0 5px 0 10px",
                  }}
                >
                  <i
                    class="fa-solid fa-mobile-screen-button"
                    style={{ color: "#6d5eff" }}
                  ></i>
                </div>
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
                placeholder="Create password"
                className="password"
                value={password}
                onChange={handleChange("password")}
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
            <br />
            {!isLoading && error && (
              <header
                style={{
                  fontSize: "16px",
                  letterSpacing: 1,
                  lineHeight: 1,
                  color: "#ff0000ba",
                }}
              >
                {error}
              </header>
            )}
            <br />
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
    </div>
  );
}
