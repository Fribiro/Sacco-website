import React from 'react'
import styled from 'styled-components'

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

export const AboutMain = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`

export const AboutBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  //text-align: justify;

  ${media.mobile} {
  }

  ${media.tablet} {
  }
`;

export const Aboutwrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${media.mobile} {
    flex-direction: column;
  }

  ${media.tablet} {
    width: 90%;
  }
`;

export const LeftAbout = styled.div`
  left: 0;
  width: 70%;
  height: 100%;

  ${media.mobile} {
    width: 100%;
  }

  ${media.tablet} {
  }
`;

export const AboutText = styled.div`
  margin-top: 2rem;
  & p {
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }

  & h5 {
    font-family: "Crimson Text", serif;
    color: rgba(118, 191, 48, 0.9);
    font-size: 1.3rem;
    font-weight: bold;
  }

  & h6 {
    font-family: "Crimson Text", serif;
    color: rgba(118, 191, 48, 0.9);
    font-size: 1.1rem;
    font-weight: bold;
  }

  & ul > li {
    list-style-type: circle solid black;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }

  ${media.mobile} {
    & p {
      //word-spacing: .5rem;
    }
  }

  ${media.tablet} {
  }
`;

export const RightAbout = styled.div`
  width: 30%;
  display: flex;
  justify-content: start;
  font-family: "Crimson Text", serif;
  font-size: 1.2rem;
  height: 18rem;
  margin: 5rem 0rem 5rem 6rem;

  ${media.mobile} {
    width: 90%;
    margin: 5rem 1rem;
  }

  ${media.tablet} {
    margin-left: 2rem;

  }
`; 

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & h5 {
    align-items: center;
    font-family: "Abril Fatface", cursive;
    justify-content: flex-start;
    color: rgba(118, 191, 48, 0.9);
    margin: 2rem 0;
  }

  & h5::after {
    content: "";
    background: rgba(118, 191, 48, 0.9);
    display: block;
    height: 0.2rem;
    width: 10rem;
    margin: 7px auto 5px;
  }

  ${media.mobile} {
  }

  ${media.tablet} {
  }
`;


export const VerticalProgress = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .vertical-progress-parent {
    width: 50%;
  }

  & h5 {
    font-family: "Crimson Text", serif;
    color: rgba(118, 191, 48, 0.9);
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }

  & h6 {
    font-family: "Crimson Text", serif;
    color: rgba(118, 191, 48, 0.9);
    font-size: 1.3rem;
    font-weight: bold;
  }

  & .row {
    display: flex;
  }
  & .row-1 {
    justify-content: flex-start;
  }
  & .row-2 {
    justify-content: flex-end;
  }
  & .row section {
    background: #333;
    border-radius: 5px;
    width: calc(50% - 40px);
    padding: 20px;
    position: relative;
  }
  & .row section::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: #333;
    top: 28px;
    z-index: -1;
    transform: rotate(45deg);
  }

  & .center-line {
    position: absolute;
    height: 96%;
    width: 0.3rem;
    background: rgba(118, 191, 48, 0.9);
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    margin-top: 1.3rem;
    margin-bottom: 1.5rem;
  }

  & .row-1 section::before {
    right: -7px;
  }
  & .row-2 section::before {
    left: -7px;
  }

  & .row section svg,
  .center-line .scroll-icon {
    position: absolute;
    //background: #f2f2f2;
    height: 1.7rem;
    width: 1.7rem;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 50%;
    background-color: #fff;
    padding: 0.3rem;
    color: #333;
    box-shadow: 0 0 0 4px rgba(118, 191, 48, 0.9),
      inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  & .center-line .scroll-icon {
    bottom: 0px;
    left: 50%;
    font-size: 25px;
    color: rgba(118, 191, 48, 0.9);
    transform: translateX(-50%);
  }
  & .row-1 section svg {
    top: 1.2rem;
    right: -3.4rem;
  }
  & .row-2 section svg {
    top: 1.2rem;
    left: -3.4rem;
  }
  & .row section .view-progress-details,
  .row section .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .row section .view-progress-details .view-progress-title {
    font-weight: 600;
  }
  & .row section p {
    margin: 0.5rem 0 1rem 0;
    font-family: "Crimson Text", serif;
    font-size: 1rem;
    color: #fff;
    text-align: center;
  }

  ${media.mobile} {
    & .vertical-progress-parent {
      width: 70%;
    }

    .vertical-progress-parent .center-line,
    .row section::before,
    .row section svg {
      display: none;
    }
    .vertical-progress-parent .row {
      margin: 10px 0;
    }

    & .row section {
      width: 100%;
    }
  }

  ${media.tablet} {
    & .vertical-progress-parent {
      width: 70%;
    }
  }
`;

export const CenterLine = styled.div`
  position: absolute;
  height: 100%;
  width: .3rem;
  background: rgba(118, 191, 48, 0.9);
  left: 50%;
  top: 1.5rem;
  transform: translateX(-50%);
`;

