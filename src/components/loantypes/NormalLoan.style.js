import React from 'react'
import LoanHeader from "./LoanHeader.style";
import SidebarLoanLinks from './SidebarLoanLinks.style';
import {LoanBody, LoanMain, LoanTitle} from './Loantypes.style'

const NormalLoan = () => {
    return (
      <LoanMain>
        <LoanHeader
          loantitle={"Normal Loan"}
          loanHeadLink={"Normal Loan"}
        ></LoanHeader>
        <LoanBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <LoanTitle>
                <h5>Product Description</h5>
              </LoanTitle>
              <div className="assetText">
                <p>
                  This is a short term form of financing that will enable you to
                  meet immediate financial essentials. The main purpose of this
                  type of loan is to enable the member to develop him/herself
                  and improve his/her standard of living. This is the main type
                  of loan the society offers.
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
                  <li>One must have a minimum of two guarantors.</li>
                  <li>One normal loan to be granted at a time.</li>
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

export default NormalLoan
