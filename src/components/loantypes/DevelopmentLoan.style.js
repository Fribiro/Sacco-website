import React from 'react'
import styled from 'styled-components'
import LoanHeader from "./LoanHeader.style";
import SidebarLoanLinks from './SidebarLoanLinks.style';
import { LoanBody, LoanMain, LoanTitle } from "./Loantypes.style";

const DevelopmentLoan = () => {
    return (
      <LoanMain>
        <LoanHeader
          loantitle={"Development Loan"}
          loanHeadLink={"Development Loan"}
        ></LoanHeader>
        <LoanBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <LoanTitle>
                <h5>Product Description</h5>
              </LoanTitle>
              <div className="assetText">
                <p>
                  You can only take this medium-term loan for investing purposes
                  and cannot have more than one credit at a time. Develop
                  yourself and stay ahead of the rest with our development loan.
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
              <SidebarLoanLinks />
            </div>
          </div>
        </LoanBody>
      </LoanMain>
    );
}

export default DevelopmentLoan
