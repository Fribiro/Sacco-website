import React from "react" 
import Homeheader from "./HomeHeader.style"
import Header from "../navigation/Header.style";
import Footer from "../navigation/Footer.style";
import styled from "styled-components";
import Sideicons from '../navigation/Sideicons.style'
import HomeSectionOne from "./HomeSectionOne.style";
import HomeAbout from "./HomeAbout.style";
import Loantypes from "./Loantypes.style";
import HomeContactSection from "./HomeContactSection.style";
import UnikCounter from "./UnikCounter.style";
import Testimonials from "./Testimonials.style";
import Partners from "./Partners.style";

const Main = styled.div`
    overflow-x: hidden;
`

const Homepage = () => {
    return (
      <>
        <Main>
          <Header />
          <Homeheader />
          <Sideicons />
          <HomeSectionOne />
          <UnikCounter/>
          <Loantypes/>
          <HomeAbout />
          <Testimonials/>
          <Partners/>
          <HomeContactSection/>
          <Footer />
        </Main>
      </>
    );
}

export default Homepage