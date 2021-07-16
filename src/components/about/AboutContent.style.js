import React from 'react'
import styled from "styled-components";
import Footer from '../navigation/Footer.style';
import Header from '../navigation/Header.style';
import Aboutheader from './Aboutheader.style';
import {
  AboutBody,
  AboutMain,
  AboutText,
  Aboutwrapper,
  CenterLine,
  LeftAbout,
  RightAbout,
  VerticalProgress,
} from "./Aboutcontainers.style";
import SidebarAbout from "./SidebarAbout.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Whowrapper = styled.div`
  & #aboutDets {
    margin-top: 3rem;
    text-align: justify;
  }
`;

const AboutContent = () => {
    return (
      <AboutMain>
        <Header />
        <Whowrapper>
          <Aboutheader
            abouttitle={"Who Are We"}
            aboutHeadLink={"Who Are We"}
          ></Aboutheader>
          <AboutBody>
            <Aboutwrapper>
              <LeftAbout>
                <AboutText>
                  <p id="aboutDets">
                    Unik Sacco is a Savings and Credit Co-operative Society,
                    which was formed in 2020 to provide members with the
                    opportunity to access loans to develop and improve their
                    economic and social status. It was started with a membership
                    of 20 members, currently growing its membership base to a
                    large number from Unique tracking Ltd and other vehicle
                    related companies who form our main common bond. The Sacco’s
                    main role is to empower its members through provision of
                    diversified products and services. Our main goal is to
                    enhance growth to become a leading financial partner in
                    Kenya with a huge asset base, massive membership, dynamic
                    products and impressive dividends.
                  </p>
                  <h5>Our Vision</h5>
                  <p>
                    To be the leading SACCO in providing quality and dynamic
                    services to our members.
                  </p>
                  <h5>Our Mission</h5>
                  <p>
                    To afford an opportunity for members to mobilize savings and
                    provide affordable credit facilities{" "}
                  </p>
                  <h5>Our Philosophy</h5>
                  <p>
                    Being pro-active in equitable wealth creation and management
                    in response to the member’s needs.
                  </p>
                </AboutText>
              </LeftAbout>
              <RightAbout>
                <SidebarAbout />
              </RightAbout>
            </Aboutwrapper>
          </AboutBody>
        </Whowrapper>
        <VerticalProgress>
          <h5>Our Core Values</h5>
          <div className="vertical-progress-parent">
            {/* <h5>Our Core Values</h5> */}
            <div className="center-line"></div>
            <div className="row row-1">
              <section>
                <div className="vertical-progress-icons">
                  <FontAwesomeIcon icon="balance-scale" />
                </div>
                <div className="view-progress-details">
                  <h6 className="view-progress-title">Equality</h6>
                  <p>
                    All SACCO members are given equal opportunities to promote
                    themselves through savings and deposits.
                  </p>
                </div>
              </section>
            </div>
            <div className="row row-2">
              <section>
                <div className="vertical-progress-icons">
                  <FontAwesomeIcon icon="shield-alt" />
                </div>
                <div className="view-progress-details">
                  <h6 className="view-progress-title">Confidentiality </h6>
                  <p>
                    All stakeholders are advised to observe utmost
                    confidentiality regarding society matters.
                  </p>
                </div>
              </section>
            </div>
            <div className="row row-1">
              <section>
                <div className="vertical-progress-icons">
                  <FontAwesomeIcon icon="hands-helping" size="1rem" />
                </div>
                <div className="view-progress-details">
                  <h6 className="view-progress-title">Integrity</h6>
                  <p>
                    Staff and management possess and adhere to high moral
                    principles, ethics and professional standards
                  </p>
                </div>
              </section>
            </div>
            <div className="row row-2">
              <section>
                <div className="vertical-progress-icons">
                  <FontAwesomeIcon icon="clipboard-list" />
                </div>
                <div className="view-progress-details">
                  <h6 className="view-progress-title">Accountability</h6>
                  <p>
                    The SACCO strives to carry out all its dealings in an
                    accountable manner.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </VerticalProgress>
        <Footer />
      </AboutMain>
    );
}

export default AboutContent
