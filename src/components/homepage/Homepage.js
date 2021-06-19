import React from "react" 
import Homeheader from "./HomeHeader.style"
import Footer from './../Footer.style';
import styled from "styled-components";
import Sideicons from './../Sideicons.style'
import HomeSectionOne from "./HomeSectionOne.style";
import HomeAbout from "./HomeAbout.style";

const Main = styled.div`
    overflow-x: hidden;
`

const Homepage = () => {
    return (
      <>
        <Main>
          <Homeheader />
          <Sideicons/> 
          <HomeSectionOne />
          <HomeAbout/>
          <Footer />
        </Main>
      </>
    );
}

export default Homepage