import React from 'react'
import styled from "styled-components";
import Footer from '../navigation/Footer.style';
import Header from '../navigation/Header.style';
import Aboutheader from './Aboutheader.style';
import {
  AboutBody,
  Aboutwrapper,
  LeftAbout,
  RightAbout,
} from "./Aboutcontainers.style";
import SidebarAbout from "./SidebarAbout.style";

const Whowrapper = styled.div`

`

const AboutContent = () => {
    return (
      <div>
        <Header />
        <Whowrapper>
          <Aboutheader abouttitle={"Who Are We"}></Aboutheader>
          <AboutBody>
            <Aboutwrapper>
              <LeftAbout>
                
              </LeftAbout>
              <RightAbout>
                <SidebarAbout />
              </RightAbout>
            </Aboutwrapper>
          </AboutBody>
        </Whowrapper>
        <Footer />
      </div>
    );
}

export default AboutContent
