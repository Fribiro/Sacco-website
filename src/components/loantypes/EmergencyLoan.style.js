import React from 'react'
import styled from 'styled-components'
import LoanHeader from './LoanHeader.style';
import SidebarLoanLinks from './SidebarLoanLinks.style';

const EmergencyBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

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
    list-style-type: circle solid black;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }

  & .assetText h5 {
    font-family: "Crimson Text", serif;
    color: rgba(118, 191, 48, 0.9);
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Title = styled.div`
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

const EmergencyLoan = () => {
    return (
      <div>
        <LoanHeader loantitle={"Emergency Loan"}></LoanHeader>
        <EmergencyBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <Title>
                <h5>Product Description</h5>
              </Title>
              <div className="assetText">
                <p>
                  An emergency is defined as an unforeseen event or expense. The
                  waiting period not being more than 24 hours.Most common
                  examples are court fines, medical illness or death within the
                  family, which is beyond a member’s control. With a supporting
                  document like a medical bill, you can qualify an emergency
                  loan to meet these expenses.
                </p>
                <h5>Requirements</h5>
                <ul>
                  <li>
                    Emergency loans are repaid within a period of 12 months.
                  </li>
                  <li>
                    Interest charged at 1% per month on reducing balance method.
                  </li>
                  <li>
                    Emergency loans are repaid within a period of 12 months.
                  </li>
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
              <SidebarLoanLinks />
            </div>
          </div>
        </EmergencyBody>
      </div>
    );
}

export default EmergencyLoan
