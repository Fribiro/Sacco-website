import React from 'react'
import LoanHeader from './LoanHeader.style';
import SidebarLoanLinks from './SidebarLoanLinks.style';
import { LoanBody, LoanMain, LoanTitle } from "./Loantypes.style";

const EmergencyLoan = () => {
    return (
      <LoanMain>
        <LoanHeader
          loantitle={"Emergency Loan"}
          loanHeadLink={"Emergency Loan"}
        ></LoanHeader>
        <LoanBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <LoanTitle>
                <h5>Product Description</h5>
              </LoanTitle>
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
        </LoanBody>
      </LoanMain>
    );
}

export default EmergencyLoan
