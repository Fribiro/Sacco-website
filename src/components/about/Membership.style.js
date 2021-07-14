import React from 'react'
import styled from "styled-components";
import Footer from "../navigation/Footer.style";
import Header from "../navigation/Header.style";
import Aboutheader from './Aboutheader.style';
import {
  AboutBody,
  AboutMain,
  AboutText,
  Aboutwrapper,
  LeftAbout,
  RightAbout,
} from "./Aboutcontainers.style";
import SidebarAbout from "./SidebarAbout.style";

const Membershipwrapper = styled.div``;

const Membership = () => {
    return (
      <AboutMain>
        <Header />
        <Membershipwrapper>
          <Aboutheader abouttitle={"Sacco Membership"}></Aboutheader>
          <AboutBody>
            <Aboutwrapper>
              <LeftAbout>
                <AboutText>
                  <p>
                    UNIK SACCO membership is open to employees of UNIQUE
                    TRACKING LTD, Spouses of Members, and Children above 18
                    years, Individuals introduced by Sacco members and employees
                    of other corporates admitted as per the Membership policy.
                  </p>
                  <h5>General Loaning Conditions</h5>
                  <ul>
                    <li>
                      A member must have contributed for at least 6 months to
                      access all the other loans except Asset Financing where a
                      new member is expected to contribute for at least three
                      (3) months before being considered for a loan.
                    </li>
                    <li>
                      A member must attach all the necessary documentation
                      including original payslips, and copies of ID cards and
                      any other stated requirements.
                    </li>
                    <li>
                      A member must complete, sign and date the loan form.
                    </li>
                    <li>
                      All the guarantors must provide their details in the loan
                      form.
                    </li>
                    <li>
                      Loan application forms must be endorsed by the delegates
                      as applicable.
                    </li>
                    <li>
                      The SACCO conducts a confirmation search from CRB and any
                      listed member cannot be considered for a loan.
                    </li>
                    <li>
                      Loan processing for short-term loans takes 24 hours while
                      long-term loans take 48 hours to 3 weeks for Asset
                      Financing with all required documentation in place.
                      Security options for acquiring a loan are Guarantors (who
                      should be payroll-based members of the SACCO), and Title
                      Deeds for urban properties.
                    </li>
                    <li>
                      Repayment and collection will be made either through check
                      off, standing order, pay-bill or cash.
                    </li>
                  </ul>
                  <h5>Guarantors</h5>
                  <p>
                    Members are allowed to guarantee long term loan
                    applications. Members with default history will not be
                    allowed to guarantee new loans.
                  </p>
                  <h5>Collaterals</h5>
                  <p>Some of the collateral accepted are as stated but not limited to:</p>
                  <ul>
                    <li>
                      Deposits: Any form of deposits or non- withdrawable
                      savings
                    </li>
                    <li>Land Titles: Land titles for urban areas</li>
                    <li>
                      Car log books: For vehicles not exceeding 7 years subject
                      to valuation.
                    </li>
                  </ul>
                </AboutText>
              </LeftAbout>
              <RightAbout>
                <SidebarAbout />
              </RightAbout>
            </Aboutwrapper>
          </AboutBody>
        </Membershipwrapper>
        <Footer />
      </AboutMain>
    );
}

export default Membership
