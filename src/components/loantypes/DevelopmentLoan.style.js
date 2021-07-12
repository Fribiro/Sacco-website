import React from 'react'
import styled from 'styled-components'
import LoanHeader from "./LoanHeader.style";
import SidebarLoanLinks from './SidebarLoanLinks.style';

const DevelopmentBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .assetWrapper {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  & .leftAsset {
    left: 0;
    width: 70%;
    height: 100%;
  }

  & .rightAsset {
    width: 30%;
    display: flex;
    justify-content: start;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
    height: 18rem;
    margin: 5rem 2rem 5rem 6rem;
  }

  & .assetText p {
    font-family: "Crimson Text", serif;
    font-size: 1.3rem;
  }

  & .assetText > ul > li {
    list-style-type: lower-roman;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }

  & .assetText h5 {
    font-family: "Crimson Text", serif;
    color: rgba(118, 191, 48, 0.9);
    font-size: 1.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & h2 {
    align-items: center;
    font-family: "Abril Fatface", cursive;
    justify-content: flex-start;
    color: rgba(118, 191, 48, 0.9);
    margin: 2rem;
  }

  & h2::after {
    content: "";
    background: rgba(118, 191, 48, 0.9);
    display: block;
    height: 0.2rem;
    width: 14rem;
    margin: 7px auto 5px;
  }
`;

const DevelopmentLoan = () => {
    return (
      <div>
        <LoanHeader></LoanHeader>
        <DevelopmentBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <Title>
                <h2>Development Loan</h2>
              </Title>
              <div className="assetText">
                <p>
                  Develop yourself and stay ahead of the rest with our
                  development loan.
                </p>
                <h5>Requirements</h5>
                <ul>
                  <li>Access up to Kes.5 million</li>
                  <li>Loans are repaid within a period of 48 months.</li>
                  <li>
                    Interest charged at 1 % per month on a reducing balance
                    method.
                  </li>
                  <li>
                    Interest charged at 1% per month on reducing balance method.
                  </li>
                  <li>
                    Loan application supported by the member’s three latest pay
                    slip.
                  </li>
                  <li>
                    Loan can be secured by either guarantors or approved
                    collateral.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightAsset">
              <SidebarLoanLinks/>
            </div>
          </div>
        </DevelopmentBody>
      </div>
    );
}

export default DevelopmentLoan
