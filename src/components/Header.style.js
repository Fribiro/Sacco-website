import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown }from "react-bootstrap";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Navwrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #f8f9fa !important;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;

  & .navbar {
    padding: 0rem 1rem 0;
  }

  & a.navbar-brand {
    width: 11rem;
    height: 4.6rem;
    padding: 0;
  }
  & #navbarNavDropdown {
    margin-left: 3rem;
  }
  & .navbar-brand img {
    margin-right: 0.25rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & a.nav-link {
    text-transform: capitalize;
  }

  & .navbar-dark .navbar-nav .nav-link {
    color: #333;
    font-size: 1rem;
  }

  & .dropdown-toggle:after {
    display: none;
  }

  & .dropdown-menu {
    background-color: #f8f9fa !important;
    border: 0;
  }

  & .dropdown-item:focus {
    color: #fff;
    background-color: #76bf30;
  }

  & .navbar-dark .navbar-brand {
    padding: 0;
  }

  & div#responsive-navbar-nav {
    margin-left: 4rem;
  }

  & .fCnFeG .dropdown-menu.show {
    margin-top: 1rem !important;
    border-top: 0;
    border-radius: 0;
  }

  & .dropdown:hover .dropdown-menu {
    display: block;
  }

  & .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  & li.nav-item {
    position: relative;
  }

  & li.nav-item a.nav-link:hover {
    cursor: pointer;
    color: #76bf30;
  }

  & li.nav-item a.nav-link:focus {
    cursor: pointer;
    color: #76bf30;
  }

  & .nav-item::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background-color: #76bf30;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: 0.5s;
  }

  & .nav-item:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }

  ${media.laptop} {
  }
`;

const Header = () => {

  return (
    <div>
      <Navwrapper>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="#">
            <img src="uniqlogo.png"></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">
                  About
                </Link>
              </li>
              {/* <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Savings Products
                </Link>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link class="dropdown-item" to="#">
                    Another action
                  </Link>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </li> */}
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Loan Products
                </Link>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link class="dropdown-item" to="normal-loan">
                    Normal Loan
                  </Link>
                  <Link class="dropdown-item" to="education-loan">
                    Education Loan
                  </Link>
                  <Link class="dropdown-item" to="/asset-finance">
                    Asset Finance
                  </Link>
                  <Link class="dropdown-item" to="development-loan">
                    Development Loan
                  </Link>
                  <Link class="dropdown-item" to="emergency-loan">
                    Emergency Loan
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="loan-calculator">
                  Loan Calculator
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Navwrapper>
    </div>
  );
};

export default Header;
