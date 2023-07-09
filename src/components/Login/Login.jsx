import React from "react";
import { Link } from "react-router-dom";
import GoogleLogo from '../../assests/images/google_logo.svg'

export default function login() {
  return (
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
            <i className="bx bx-hide eye-icon"></i>
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass">
              Forgot password?
            </a>
          </div>
          <div className="field button-field">
            <button>Login</button>
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
