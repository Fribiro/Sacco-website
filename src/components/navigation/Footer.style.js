import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};


const Footerwrapper = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  position: relative;

  & .container {
    padding: 2.5rem 0;
  }

  & .bgoverlay {
    background: linear-gradient(
        rgba(118, 191, 48, 0.89),
        rgba(118, 191, 48, 0.89)
      ),
      url("/img/desk7.jpg") no-repeat center / cover;
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
    outline: none;
    padding-left: 0.5rem;
  }

  & .segment-four form input[type="submit"] {
    grid-column: 2;
    grid-row: 1;
    background: #333;
    border: none;
    padding: 0.19rem 0.56rem;
    color: #fff;
    font-size: 0.75rem;
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

  ${media.mobile} {
    & .segment-one,
    .segment-two,
    .segment-three,
    .segment-four {
      padding: 1rem 2rem;
    }
  }

  ${media.tablet} {
    & .segment-one,
    .segment-two,
    .segment-three,
    .segment-four {
      padding: 1rem;
    }

    & .segment-four form input[type="submit"] {
      padding: 0.2rem;
    }

    & .segment-four form {
      display: grid;
      grid-template-columns: 60% 40%;
    }

    & .segment-four form input[type="submit"] {
      width: 100%;
      font-size: 0.6rem;
    }

    & .segment-four form input[type="email"] {
      padding-left: 0.3rem;
    }
  }
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

  ${media.mobile} {
    line-height: 1rem;
    padding: .5rem 0;
  }
`;

const Footer = () => {
    return (
      <>
        <Footerwrapper>
          <div className="bgoverlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                <h4>Unik Sacco</h4>
                <p>
                  The number one sacco in Kenya that offers quick and easy
                  access to loans for different purposes.
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                <h3>Page Links</h3>
                <ul>
                  <li>
                    <Link to="/development-loan">Development Loan</Link>
                  </li>
                  <li>
                    <Link to="/emergency-loan">Emergency Loan</Link>
                  </li>
                  <li>
                    <Link to="/normal-loan">Normal Loan</Link>
                  </li>
                  <li>
                    <Link to="/education-loan">Education Loan</Link>
                  </li>
                  <li>
                    <Link to="/asset-finance">Asset Finance</Link>
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
          &copy; 2021 All Rights Reserved | Developed & Designed by Unik Sacco.
        </Copyright>
      </>
    );
}

export default Footer