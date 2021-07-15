import React from 'react'
import styled from 'styled-components'
import LoanHeader from './LoanHeader.style'
import SidebarLoanLinks from './SidebarLoanLinks.style';
import { LoanBody, LoanMain, LoanTitle } from "./Loantypes.style";

const AssetFinance = () => {
    return (
      <LoanMain>
        <LoanHeader
          loantitle={"Asset Finance"}
          loanHeadLink={"Asset Finance"}
        ></LoanHeader>
        <LoanBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <LoanTitle>
                <h5>Product Description</h5>
              </LoanTitle>
              <div className="assetText">
                <p>
                  This is a short term form of financing that will help members
                  in meeting immediate financial essentials.
                </p>
                <h5>Requirements</h5>
                <ul>
                  <li>
                    This product will enable members to buy motor vehicles and
                    other business assets that may be approved from time to time
                    by the BoD and management of UNIK SACCO.
                  </li>
                  <li> The three times deposits rule will not apply.</li>
                  <li>
                    The member should have a deposit to loan ratio of at least
                    1:5
                  </li>
                  <li>
                    Rate of interest is 1.125% per month on reducing balance.
                  </li>
                  <li>Maximum repayment period is 24 months.</li>
                  <li>Loan is open to offset by other loan.</li>
                  <li>
                    The asset will be jointly owned by the SACCO and the member
                    during the loan period. The applicant to bear valuation
                    costs, transfer costs and security perfection costs.
                  </li>
                  <li>
                    The asset must be comprehensively insured and if movable
                    property, be put on a tracking device at the applicant’s
                    cost.
                  </li>
                  <li>
                    The asset must be presented in the office for physical
                    inspection by the Secretariat.
                  </li>
                  <li>
                    Maximum guarantee amount for the motor vehicle will be 60%
                    of the depreciated (forced sale) value, depending on the
                    type, state and age of the motor vehicle.
                  </li>
                  <li>
                    The Board may refuse to accept an asset pledged as security
                    without giving reasons for refusal.
                  </li>
                </ul>
                <p>Loans granted for motor-vehicle purchase are subject to:</p>
                <ul>
                  <li>
                    Full comprehensive insurance coverage on the vehicle during
                    the entire term of the loan, with the same assigned in
                    favour of the Society.
                  </li>
                  <li>Anti-theft devices are to be installed.</li>
                  <li>
                    Where a vehicle forms part of the collateral security for
                    the loan, the member shall be required to sign a formal
                    agreement by way of instrument of charge, thereby giving the
                    society first lien on the subject vehicle.
                  </li>
                  <li>
                    A member shall not dispose of the vehicle under an
                    instrument of charge unless written consent is granted by
                    the Society.
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

export default AssetFinance
