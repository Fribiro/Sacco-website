import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom"

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const AboutHeaderWrapper = styled.div`
  width: 100%;
  height: 35vh;
  margin-top: 11vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & .about-header-bgimg {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("/img/table.jpg");
    filter: brightness(60%);
    background: no repeat center center scroll;
    -webkit-background-size: cover;
    background-size: cover;
  }

  & .aboutTitleType {
    position: absolute;
    left: 6rem;
    z-index: 1;
    color: rgba(118, 191, 48, 0.9);
    font-family: "Abril Fatface", cursive;
    padding-left: 1rem;
    border-left: 0.4rem solid rgba(118, 191, 48, 0.9);
  }

  & .aboutHeadlink {
    position: absolute;
    top: 15rem;
    left: 6rem;
    z-index: 1;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Crimson Text", serif;
    padding-left: 1rem;
    font-size: 1.2rem;
  }

  & .aboutHeadlink a {
    color: rgba(255, 255, 255, 0.9);
    font-family: "Crimson Text", serif;
    padding-left: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
  }

  ${media.mobile} {
    & .aboutTitleType {
      left: 2rem;
    }
    & .aboutHeadlink {
      top: 15rem;
      left: 0;
    }

    & .aboutHeadlink a {
      color: rgba(255, 255, 255, 0.9);
      font-family: "Crimson Text", serif;
      padding-left: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
  ${media.tablet} {
    margin-top: 7vh;

    & .aboutTitleType {
      left: 2rem;
    }
    & .aboutHeadlink {
      top: 29vh;
      left: 0;
    }

    & .aboutHeadlink a {
      color: rgba(255, 255, 255, 0.9);
      font-family: "Crimson Text", serif;
      padding-left: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
`;

const Aboutheader = (props) => {
    return (
      <div>
        <AboutHeaderWrapper>
          <div className="about-header-bgimg"></div>
          <h2 className="aboutTitleType">{props.abouttitle}</h2>
          <h6 className="aboutHeadlink">
            <Link to="/">Unik Sacco</Link> / {props.aboutHeadLink}
          </h6>
        </AboutHeaderWrapper>
      </div>
    );
}

export default Aboutheader
