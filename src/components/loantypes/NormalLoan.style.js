import React from 'react'
import styled from 'styled-components'
import LoanHeader from "./LoanHeader.style";
import SidebarLoanLinks from './SidebarLoanLinks.style';

const NormalBody = styled.div`
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
    width: 10rem;
    margin: 7px auto 5px;
  }
`;

const NormalLoan = () => {
    return (
      <div>
        <LoanHeader></LoanHeader>
        <NormalBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <Title>
                <h2>Normal Loan</h2>
              </Title>
              <div className="assetText">
                <p>
                  The main purpose of this type of loan is to enable the member
                  to develop him/herself and improve his/her standard of living.
                  This is the main type of loan the society offers.
                </p>
                <h5>Requirements</h5>
                <ul>
                  <li>
                    Normal loan is given to any member who is eligible as per
                    his/her deposits (issued three times the deposits), 2/3rd
                    rule, and has no other normal loan.
                  </li>
                  <li>
                    The maximum repayment period for this type of loan is 48
                    months (2years).
                  </li>
                  <li>Normal loan interest rates at 1.21% pm</li>
                  <li>
                    Interest charged at 1% per month on reducing balance method.
                  </li>
                  <li>Maximum repayment period is 24 months.</li>
                  <li>Emergency loans have a maximum of Kshs. 100,000</li>
                  <li>
                    Member to attach supporting documents to application form
                    e.g. medical bill, death certificate
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightAsset">
              <SidebarLoanLinks/>
            </div>
          </div>
        </NormalBody>
      </div>
    );
}

export default NormalLoan
