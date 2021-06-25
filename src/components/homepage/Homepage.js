import React from "react" 
import Homeheader from "./HomeHeader.style"
import Footer from './../Footer.style';
import styled from "styled-components";
import Sideicons from './../Sideicons.style'
import HomeSectionOne from "./HomeSectionOne.style";
import HomeAbout from "./HomeAbout.style";
import Loantypes from "./Loantypes.style";
import Header from "../Header.style";

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
          <Loantypes/>
          <HomeAbout />
          <Footer />
        </Main>
      </>
    );
}

export default Homepage