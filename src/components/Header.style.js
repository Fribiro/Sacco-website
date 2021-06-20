import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Animated } from "react-animated-css";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Navwrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  z-index: 1;
  position: fixed;
  //background-color: transparent;

  & .navtransparent {
    background-color: transparent;
  }

  & .active {
    background-color: rgb(255, 255, 255);
    color: rgb(51, 51, 51);
  }
`;

const Logo = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  width: 15rem;
  height: 4.5rem;
`

const Nav = styled.ul`
  margin-top: 0;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  margin-bottom: 0;
  padding-left: 0;
  height: 100%;
  //margin-right: 4rem;

  & li {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 0.6rem;
    color: #fff;
  }

  & li a {
    margin: 0 0.7rem;
    text-decoration: none;
    align-items: center;
    width: 100%;
    position: relative;
    font-size: 1rem;
  }

  &li:hover {
    cursor: pointer;
    color: #76bf30;
  }

  &li:after {
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

  &li:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    background-color: #76bf30;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1rem 0;
    right: 0;

    & li {
      padding: 1rem;
    }
  }
`;

const Header = () => {

  const [navBackground, setNavBackground] = useState(true);

    const handleScroll = () => {
      console.log(window.scrollY);
      const show = window.scrollY > 80;
      if (show) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <div>
        <Navwrapper className={navBackground ? "active" : "navtransparent"}>
          <Logo>
            <img src="uniqlogo.png"></img>
          </Logo>
          <Nav className=" ">
            <Animated
              animationIn="slideInRight"
              animationInDelay="0s"
              isVisible={true}
            >
              <li className="">
                <a
                  className=""
                  aria-current="page"
                  activeclassName="active"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </a>
              </li>
            </Animated>
            <Animated animationIn="slideInRight" animationInDelay=".5s">
              <li className="">
                <a className="" to="about" spy={true} smooth={true}>
                  About
                </a>
              </li>
            </Animated>

            <Animated
              animationIn="slideInRight"
              animationInDelay="1.5s"
              isVisible={true}
            >
              <li className="">
                <a className="" to="services" spy={true} smooth={true}>
                  Services
                </a>
              </li>
            </Animated>

            <Animated
              animationIn="slideInRight"
              animationInDelay="2s"
              isVisible={true}
            >
              <li className="">
                <a
                  className=""
                  to="portfolio"
                  spy={true}
                  smooth={true}
                >
                  Contacts
                </a>
              </li>
            </Animated>
          </Nav>
        </Navwrapper>
      </div>
    </div>
  );
};

export default Header;
