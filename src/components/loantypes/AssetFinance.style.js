import React from 'react'
import styled from 'styled-components'
import LoanHeader from './LoanHeader.style'
import SidebarLoanLinks from './SidebarLoanLinks.style';

const AssetFinanceBody = styled.div`
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

const AssetFinance = () => {
    return (
      <div>
        <LoanHeader></LoanHeader>
        <AssetFinanceBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <Title>
                <h2>Asset Finance</h2>
              </Title>
              <div className="assetText">
                <p>
                  This is a short term form of financing that will help members
                  in meeting immediate financial essentials.
                </p>
                <h5>Product Features</h5>
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
              <SidebarLoanLinks/>
            </div>
          </div>
        </AssetFinanceBody>
      </div>
    );
}

export default AssetFinance
