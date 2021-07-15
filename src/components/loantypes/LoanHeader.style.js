import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const LoanHeaderWrapper = styled.div`
  width: 100%;
  height: 35vh;
  margin-top: 11vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & .loan-header-bgimg {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("/img/desk7.jpg");
    filter: brightness(60%);
    background: no repeat center center scroll;
    -webkit-background-size: cover;
    background-size: cover;
  }

  & .loanTitleType {
    position: absolute;
    left: 6rem;
    z-index: 1;
    color: rgba(118, 191, 48, 0.9);
    font-family: "Abril Fatface", cursive;
    padding-left: 1rem;
    border-left: 0.4rem solid rgba(118, 191, 48, 0.9);
  }

  & .loanHeadlink {
    position: absolute;
    top: 15rem;
    left: 4rem;
    z-index: 1;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Crimson Text", serif;
    padding-left: 1rem;
    font-size: 1.2rem;
  }

  & .loanHeadlink a {
    color: rgba(255, 255, 255, 0.9);
    font-family: "Crimson Text", serif;
    padding-left: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
  }

  ${media.mobile} {
    & .loanTitleType {
      left: 2rem;
    }
    & .loanHeadlink {
      top: 20rem;
      left: 0;
    }

    & .loanHeadlink a {
      color: rgba(255, 255, 255, 0.9);
      font-family: "Crimson Text", serif;
      padding-left: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
  ${media.tablet} {
    margin-top: 7vh;

    & .loanTitleType {
      left: 2rem;
    }
    & .loanHeadlink {
      top: 18rem;
      left: 0;
    }

    & .loanHeadlink a {
      color: rgba(255, 255, 255, 0.9);
      font-family: "Crimson Text", serif;
      padding-left: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
`;

const LoanHeader = (props) => {
    return (
      <LoanHeaderWrapper>
        <div className="loan-header-bgimg"></div>
        <h2 className="loanTitleType">{props.loantitle}</h2>
        <h6 className="loanHeadlink">
          <Link to="/">Unik Sacco</Link> / {props.loanHeadLink}
        </h6>
      </LoanHeaderWrapper>
    );
}

export default LoanHeader
