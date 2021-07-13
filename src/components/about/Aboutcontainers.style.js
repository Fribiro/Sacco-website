import React from 'react'
import styled from 'styled-components'

export const AboutBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Aboutwrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const LeftAbout = styled.div`
  left: 0;
  width: 70%;
  height: 100%;
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
    font-size: 1.5rem;
    font-weight: bold;
  }

  & ul > li {
    list-style-type: circle solid black;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }
`;

export const RightAbout = styled.div`
  width: 30%;
  display: flex;
  justify-content: start;
  font-family: "Crimson Text", serif;
  font-size: 1.2rem;
  height: 18rem;
  margin: 5rem 2rem 5rem 6rem;
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
`;

