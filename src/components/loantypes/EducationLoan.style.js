import React from 'react'
import styled from 'styled-components'
import LoanHeader from "./LoanHeader.style";
import SidebarLoanLinks from './SidebarLoanLinks.style';

const EducationBody = styled.div`
  display: flex;
  justify-content: center;

  & .assetWrapper {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

const EducationLoan = () => {
    return (
      <div>
        <LoanHeader loantitle={"Education Loan"}></LoanHeader>
        <EducationBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <Title>
                <h5>Product Description</h5>
              </Title>
              <div className="assetText">
                <p>
                  Funding education should not be a headache. With supporting
                  documents like fees structures, you can easily apply for a
                  school fees loan for yourself/or your child; which will be
                  disbursed within one week. Get the best education with our
                  help. Save with us to meet the cost of education!
                </p>
                <h5>Requirements</h5>
                <ul>
                  <li>
                    The application form must be supported by the fees
                    structure/s.
                  </li>
                  <li>
                    School fees cheques are written in favor of the learning
                    institution.
                  </li>
                  <li>
                    School fees loans are repaid within a period of 12 months.
                  </li>
                  <li>
                    Interest charged at 1% per month on reducing balance method.
                  </li>
                  <li>
                    Maximum limit is a member's deposit x3 (subject to 1/3
                    salary rule).
                  </li>
                  <li>
                    Minimum of 2 guarantors and acceptable collaterals required.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightAsset">
              <SidebarLoanLinks />
            </div>
          </div>
        </EducationBody>
      </div>
    );
}

export default EducationLoan
