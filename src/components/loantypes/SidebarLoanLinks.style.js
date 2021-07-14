import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarLoanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const Loanlinkwrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 16rem;
  width: 100%;
  background-color: rgba(118, 191, 48, 0.9);
  padding-left: 0;

  & li {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    border-bottom: 0.06rem solid #000;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  & #assetFin {
    border-bottom: 0 !important;
  }

  & li a {
    text-decoration: none;
    color: #fff;
  }

  & li a:hover {
    color: #000;
  }
`;

const ApplicationForm = styled.button`
  font-family: "Crimson Text", serif;
  outline: none;
  border: 0;
  margin-bottom: 2rem;
  height: 3rem;
  padding: 0.7rem;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }

  & h6 {
    text-align: center;
    margin: 0;
  }
`;

const SidebarLoanLinks = () => {
    return (
      <SidebarLoanWrapper>
        <ApplicationForm>
          <FontAwesomeIcon icon="file-pdf" />
          <h6>APPLICATION FORM</h6>
        </ApplicationForm>
        <Loanlinkwrapper>
          <li>
            <Link to="development-loan">Development Loan</Link>
          </li>
          <li>
            <Link to="emergency-loan">Emergency Loan</Link>
          </li>
          <li>
            <Link to="education-loan">Education Loan</Link>
          </li>
          <li>
            <Link to="normal-loan">Normal Loan</Link>
          </li>
          <li>
            <Link to="asset-finance">Asset Finance</Link>
          </li>
          <li id="assetFin">
            <Link to="loan-calculator">Loan Calculator</Link>
          </li>
        </Loanlinkwrapper>
      </SidebarLoanWrapper>
    );
}

export default SidebarLoanLinks
