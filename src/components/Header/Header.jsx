import React, { useRef, useContext, useState, useEffect } from "react";
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
  {
    display: "Contact",
    url: "/contact",
  },
  // {
  //   display: "Blog",
  //   url: "#",
  // },
];

const Header = () => {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const menuRef = useRef();
  const userMenuRef = useRef();
  const { isLoggedIn } = useContext(AuthContext);

  const isMobile = window.innerWidth < 767;

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setToggleUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

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

                {isMobile && !isLoggedIn && (
                  <>
                    <li className="nav__item">
                      <NavLink to="/login">
                        <span>
                          <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        </span>
                        Login
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/sign-up">
                        <span>
                          <i class="fa-solid fa-user-plus"></i>
                        </span>
                        SignUp
                      </NavLink>
                    </li>
                  </>
                )}
                {isMobile && !isLoggedIn && (
                  <>
                    <li className="nav__item">
                      <NavLink to="/logout">
                        <span>
                          <i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>
                        </span>
                        Logout
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/profile">
                        <span>
                          <i class="fa-solid fa-user"></i>
                        </span>
                        Profile
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/orders">
                        <span>
                          <i class="fa-solid fa-clock-rotate-left"></i>
                        </span>
                        Orders
                      </NavLink>
                    </li>
                  </>
                )}

                {!isMobile && (
                  <li className="nav__item position-relative" ref={userMenuRef}>
                    <div
                      className="field button-field user__menu"
                      onClick={() => setToggleUserMenu(!toggleUserMenu)}
                    >
                      <i class="fa-solid fa-user"></i>
                    </div>
                    {toggleUserMenu && (
                      <ul className="user__menu__list">
                        {!isLoggedIn && (
                          <>
                            <li>
                              <NavLink to="/login">
                                <span>
                                  <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                </span>
                                Login
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/sign-up">
                                <span>
                                  <i class="fa-solid fa-user-plus"></i>
                                </span>
                                SignUp
                              </NavLink>
                            </li>
                          </>
                        )}
                        {!isLoggedIn && (
                          <>
                            <li>
                              <NavLink to="/logout">
                                <span>
                                  <i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>
                                </span>
                                Logout
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/profile">
                                <span>
                                  <i class="fa-solid fa-user"></i>
                                </span>
                                Profile
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/orders">
                                <span>
                                  <i class="fa-solid fa-clock-rotate-left"></i>
                                </span>
                                Orders
                              </NavLink>
                            </li>
                          </>
                        )}
                      </ul>
                    )}
                  </li>
                )}
              </ul>
            </div>
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
