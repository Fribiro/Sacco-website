import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavDropdown }from "react-bootstrap";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Navwrapper = styled.div`
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;

  & .navbar-dark .navbar-nav .nav-link {
    color: #333;
    font-size: 1rem;
  }

  & .dropdown-toggle:after {
    display: none;
  }

  & .navbar-dark .navbar-brand {
    padding: 0;
  }

  & div#responsive-navbar-nav {
    margin-left: 4rem;
  }

  & .dropdown-menu.show {
    margin-top: 2rem;
    border-radius: 0;
  }

  ${media.laptop} {
  }
  & a.nav-link:hover {
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
  }
`;

const Header = () => {

  return (
    <div>
      <Navwrapper>
        
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src="uniqlogo.png"
              style={{ width: "6rem", height: "3.5rem" }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
        </Navbar>
      </Navwrapper>
    </div>
  );
};

export default Header;
