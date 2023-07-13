import React, { useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";

import { AuthContext } from "../../authContext";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  // {
  //   display: "About",
  //   url: "#",
  // },
  {
    display: "Courses",
    url: "/courses",
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
  const { isLoggedIn } = useContext(AuthContext);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container className="header__container">
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <NavLink to={"/"} className="main-link">
              <h2 className="d-flex align-items-center gap-1">
                <i className="ri-pantone-line"></i> Learners.
              </h2>
            </NavLink>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
                <li className="nav__item cart__icon">
                  <NavLink to="/cart">
                    <span className="cart__icon__wrapper">
                      <i class="ri-shopping-cart-2-line"></i>
                      <span className="cart__value">3</span>
                    </span>
                  </NavLink>
                </li>
                {!isLoggedIn && (
                  <li className="nav__item">
                    <div className="field button-field login__button">
                      <NavLink className="login" to="/login">
                        <button>Login</button>
                      </NavLink>
                    </div>
                  </li>
                )}

                {isLoggedIn && (
                  <>
                    <li className="nav__item">
                      <div className="field button-field login__button">
                        <NavLink className="logout" to="/logout">
                          <button>Logout</button>
                        </NavLink>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div> */}
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
