import React from 'react'
import styled from "styled-components";

const AboutHeaderWrapper = styled.div`
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
    background: url("/img/table.jpg");
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
`;

const Aboutheader = (props) => {
    return (
      <div>
        <AboutHeaderWrapper>
          <div className="loan-header-bgimg"></div>
          <h2 className="loanTitleType">{props.abouttitle}</h2>
        </AboutHeaderWrapper>
      </div>
    );
}

export default Aboutheader
