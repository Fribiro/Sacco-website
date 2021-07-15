import React from 'react'
import styled from 'styled-components'
import LoanHeader from "./LoanHeader.style";
import SidebarLoanLinks from './SidebarLoanLinks.style';
import { LoanBody, LoanMain, LoanTitle } from "./Loantypes.style";

const EducationLoan = () => {
    return (
      <LoanMain>
        <LoanHeader
          loantitle={"Education Loan"}
          loanHeadLink={"Education Loan"}
        ></LoanHeader>
        <LoanBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <LoanTitle>
                <h5>Product Description</h5>
              </LoanTitle>
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
        </LoanBody>
      </LoanMain>
    );
}

export default EducationLoan
