import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Footerwrapper = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  position: relative;
  /* background: linear-gradient(
      rgba(118, 191, 48, 0.85),
      rgba(118, 191, 48, 0.85)
    ),
    url("/img/desk7.jpg");
  background: no repeat center center scroll;
  -webkit-background-size: cover;
  background-size: cover;
  filter: brightness(60%); */

  & .container {
    padding: 2.5rem 0;
  }

  & .bgoverlay {
    background: linear-gradient(
        rgba(118, 191, 48, 0.89),
        rgba(118, 191, 48, 0.89)
      ),
      url("/img/desk7.jpg");
    background: no repeat center center scroll;
    -webkit-background-size: cover;
    background-size: cover;
    filter: brightness(85%);
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  & blockquote::before {
    content: "“";
    font-size: 50px;
    position: relative;
    color: #333;
    line-height: 20px;
    bottom: -15px;
    right: 5px;
  }

  & blockquote::after {
    content: "”";
    font-size: 50px;
    position: relative;
    color: #333;
    line-height: 10px;
    bottom: -15px;
    left: 5px;
  }

  & .profile:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s;
  }

  & .footer-top {
    background: #76bf30;
    opacity: 0.5;
    padding: 30px 0;
  }

  /*.footer-background-image {
  background: URL('/img/footer.jpg');
  filter: brightness(90%);
  -webkit-filter: brightness(90%);
  background: no repeat center center scroll;
  -webkit-background size: cover;
  background-size: cover;
  z-index: 1;
}*/
  & footer .row p {
    color: #7f8c8d;
  }

  & .segment-one h4 {
    font-family: "Abril Fatface", cursive;
    color: #fff;
    letter-spacing: 3px;
    margin: 10px 0;
  }

  & .segment-two h3 {
    color: #fff;
    font-family: "Bebas Neue", cursive;
    text-transform: uppercase;
  }

  & .segment-two h3:before {
    content: "|";
    color: #333;
    padding-right: 10px;
  }

  & .segment-two ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & .segment-two ul li {
    border-bottom: 1px solid #333;
    line-height: 25px;
  }

  & .segment-two ul li a {
    color: #fff;
    text-decoration: none;
  }

  & .segment-two ul li a:hover {
    color: #fff;
    cursor: pointer;
  }

  & .segment-three h3 {
    color: #fff;
    font-family: "Bebas Neue", cursive;
    text-transform: uppercase;
  }

  & .segment-three h3:before {
    content: "|";
    color: #333;
    padding-right: 10px;
  }

  & .segment-three a {
    background: #494848;
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 50%;
    margin: 0 0.1rem;
    cursor: pointer;
  }

  & .segment-three a i {
    font-size: 20px;
    color: #fff;
    padding: 0.6rem 0.75rem;
  }

  & .segment-four h3 {
    color: #fff;
    font-family: "Bebas Neue", cursive;
    text-transform: uppercase;
  }

  & .segment-four h3:before {
    content: "|";
    color: #333;
    padding-right: 10px;
  }

  & .segment-four form {
    display: grid;
    grid-template-columns: 65% 35%;
  }

  & .segment-four form input[type="email"] {
    grid-column: 1;
    grid-row: 1;
  }

  & .segment-four form input[type="submit"] {
    grid-column: 2;
    grid-row: 1;
    background: #333;
    border: none;
    padding: 3px 9px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
  }

  & input[type="submit"]:hover {
    opacity: 0.8;
  }

  & .footer-bottom-text {
    text-align: center;
    background: #000;
    line-height: 50px;
  }
`;

const Bgimg = styled.div`
  //position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  display: block;
  background: url("/img/desk7.jpg");
  background: no repeat center center scroll;
  -webkit-background-size: cover;
  background-size: cover;
  filter: brightness(40%);
`;

const Copyright = styled.div`
  text-align: center;
  background: rgba(118, 191, 48, 0.9);
  line-height: 2.5rem;
  left: 0;
  bottom: 0;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  font-size: large 0.9rem;
`;

const Footer = () => {
    return (
      <>
        <Footerwrapper>
          <div className="bgoverlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                <h4>Unique Sacco</h4>
                <p>
                  The number one sacco in Kenya that offers quick and easy
                  access to loans for different purposes.
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                <h3>Page Links</h3>
                <ul>
                  <li>
                    <Link to="/developmentloan">Development Loan</Link>
                  </li>
                  <li>
                    <Link to="/emergencyloan">Emergency Loan</Link>
                  </li>
                  <li>
                    <Link to="/normalloan">Normal Loan</Link>
                  </li>
                  <li>
                    <Link to="/educationloan">Education Loan</Link>
                  </li>
                  <li>
                    <Link to="/assetfinance">Asset Finance</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 segment-three sm-mb-30">
                <h3>Follow Us</h3>
                <p>Follow us on our social media platforms, to stay updated.</p>
                <Link to="">
                  <i className="fa fa-linkedin"></i>
                </Link>
                <Link to="">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="">
                  <i className="fa fa-facebook"></i>
                </Link>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 segment-four sm-mb-30">
                <h3>Newsletter</h3>
                <p>
                  Subscribe to our newsletter to receive regular updates via
                  your email.
                </p>
                <form action="">
                  <input type="email" name="email" placeholder="Enter email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </Footerwrapper>
        <Copyright>
          &copy; 2021 All Rights Reserved | Developed & Designed by Uniq Sacco.
        </Copyright>
      </>
    );
}

export default Footer