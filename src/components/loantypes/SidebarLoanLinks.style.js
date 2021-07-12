import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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

const SidebarLoanLinks = () => {
    return (
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
    );
}

export default SidebarLoanLinks
