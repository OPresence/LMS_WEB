import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  // {
  //   display: "Pages",
  //   url: "#",
  // },
  // {
  //   display: "Blog",
  //   url: "#",
  // },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container className="header__container">
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to={"/"} className="main-link">
              <h2 className="d-flex align-items-center gap-1">
                <i class="ri-pantone-line"></i> Learners.
              </h2>
            </Link>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
                <li className="nav__item">
                  <div className="field button-field login__button">
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                  </div>
                  {/* <button className="login__btn">Login</button> */}
                </li>
              </ul>
            </div>

            {/* <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +88 0123456789
              </p>
            </div> */}
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
