import React from 'react'
import styled from "styled-components";
import Footer from "../navigation/Footer.style";
import Header from "../navigation/Header.style";
import Aboutheader from './Aboutheader.style';
import {
  AboutBody,
  Aboutwrapper,
  LeftAbout,
  RightAbout,
} from "./Aboutcontainers.style";
import SidebarAbout from "./SidebarAbout.style";

const Storywrapper = styled.div``;

const Ourstory = () => {
    return (
      <div>
        <Header />
        <Storywrapper>
          <Aboutheader abouttitle={"Our Story"}></Aboutheader>
          <AboutBody>
            <Aboutwrapper>
              <LeftAbout></LeftAbout>
              <RightAbout>
                <SidebarAbout />
              </RightAbout>
            </Aboutwrapper>
          </AboutBody>
        </Storywrapper>
        <Footer />
      </div>
    );
}

export default Ourstory
