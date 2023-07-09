import React from "react";
import { Link } from "react-router-dom";

import GoogleLogo from '../../assests/images/google_logo.svg'

export default function SignUp() {
  return (
    <div className="form">
      <div className="form-content">
        <header>Signup</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Create password"
              className="password"
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Confirm password"
              className="password"
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
            <Link to="/login" clLinkssName="link login-link">
              Login
            </Link>
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="media-options">
        <a href="#" className="field google">
          <img src={GoogleLogo} alt="Google Logo" className="google-img" />
          <span>Login with Google</span>
        </a>
      </div>
    </div>
  );
}
