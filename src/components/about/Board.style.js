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

const Boardwrapper = styled.div`
  & .row {
    margin: 3rem 0;
    width: 100vw;
    height: 24rem;
  }

  & .col-md-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }

  & .bodImg {
    top: 0;
    height: 80%;
  }

  & .bodTitle {
    height: 20%;
  }

  & .bodImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Board = () => {
    return (
      <div>
        <Header />
        <Boardwrapper>
          <Aboutheader abouttitle={"Board of Directors"}></Aboutheader>
          <AboutBody>
            <Aboutwrapper>
              <div className="row">
                <div
                  className="bod col-md-3"
                  style={{ backgroundColor: "green" }}
                >
                  <div className="bodImg"><img src="/img/user1.jpg" alt="" /></div>
                  <div className="bodTitle"></div>
                </div>
                <div className="bod col-md-3"></div>
                <div className="bod col-md-3"></div>
                <div className="bod col-md-3"></div>
              </div>
            </Aboutwrapper>
          </AboutBody>
        </Boardwrapper>
        <Footer />
      </div>
    );
}

export default Board
