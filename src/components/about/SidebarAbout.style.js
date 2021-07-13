import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;
  height: 16rem;
  width: 100%;
  background-color: rgba(118, 191, 48, 0.9);
  padding-left: 0;
  margin-top: 0 !important;

  & h5 {
    font-family: "Crimson Text", serif;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.4rem;
    font-weight: bold;
  }

  & p {
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
    //text-align: center;
    padding: 0 1.4rem;
  }

  & #aboutBtn {
    outline: none;
    border: 0;
    width: 80%;
    height: 3rem;
    font-family: "Crimson Text", serif;
    color: #fff;
    background-color: black;
  }

  & #aboutBtn > svg {
    margin: 0 1rem 0 0;
  }
`;

const SidebarAbout = () => {
    return (
      <div>
        <SidebarAboutWrapper>
          <h5>Need Any Clarification?</h5>
          <p>
            Any questions bothering you? Don't hesitate
            to ask, we are prompt in our response.
          </p>
          <button id="aboutBtn">
            <FontAwesomeIcon icon="envelope" />
            GET IN TOUCH
          </button>
        </SidebarAboutWrapper>
      </div>
    );
}

export default SidebarAbout
