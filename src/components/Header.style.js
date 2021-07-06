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
  //position: fixed;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;

  & .navbar-dark .navbar-nav .nav-link {
    color: #333;
    font-size: 1rem;
  }

  & .dropdown-toggle:after {
    display: none;
  }

  .dropdown-menu {
    background-color: #f8f9fa !important;
    border: 0;
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

  ${media.laptop} {
  }
  /* & a.nav-link:hover {
    cursor: pointer;
    color: #76bf30;
  }

  & .nav-link:after {
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

  & a.nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  } */
`;

const Header = () => {

  return (
    <div>
      <Navwrapper>
        {/* <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src="uniqlogo.png"
              style={{ width: "6rem", height: "3.5rem" }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <NavDropdown
                title="Savings Products"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="savings-products">
                  Savings Products
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Loan Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="normal-loan">
                  Normal Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="education-loan">
                  Education Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="asset-finance">
                  Asset Finance
                </NavDropdown.Item>
                <NavDropdown.Item href="development-loan">
                  Development Loan
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="emergency-loan">
                  Emergency Loan
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="loan-calculator">Loan Calculator</Nav.Link>
              <Nav.Link href="contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" href="#">
            <img
              src="uniqlogo.png"
              style={{ width: "6rem", height: "3.5rem" }}
            ></img>
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
                <Link class="nav-link" href="#">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
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
                  <Link class="dropdown-item" href="#">
                    Action
                  </Link>
                  <Link class="dropdown-item" href="#">
                    Another action
                  </Link>
                  <Link class="dropdown-item" href="#">
                    Something else here
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
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
                  <Link class="dropdown-item" href="#">
                    Normal Loan
                  </Link>
                  <Link class="dropdown-item" href="#">
                    Education Loan
                  </Link>
                  <Link class="dropdown-item" href="#">
                    Asset Finance
                  </Link>
                  <Link class="dropdown-item" href="#">
                    Development Loan
                  </Link>
                  <Link class="dropdown-item" href="#">
                    Emergency Loan
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
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
