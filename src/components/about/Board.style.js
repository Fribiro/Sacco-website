import React from 'react'
import styled from "styled-components";
import Footer from "../navigation/Footer.style";
import Header from "../navigation/Header.style";
import Aboutheader from './Aboutheader.style';
import {
  AboutBody,
  AboutMain,
  Aboutwrapper,
  LeftAbout,
  RightAbout,
} from "./Aboutcontainers.style";
import SidebarAbout from "./SidebarAbout.style";

const Boardwrapper = styled.div`
  & .row {
    margin: 3rem 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  & .col-md-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    height: 26rem;
    margin: 0 1rem;
  }

  & .bodImg:hover,
  .bodTitle:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s;
  }

  & .bodImg {
    top: 0;
    height: 55%;
    display: inline-block;
    width: 80%;
    z-index: 1;
    position: relative;
    padding: 10px;
    border: 2px solid #333;
  }

  & .bodTitle {
    height: 45%;
    width: 100%;
    background-color: rgba(118, 191, 48, 0.9);
    color: #555;
    padding: 125px 25px 25px;
    margin-top: -100px;
    display: inline-block;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  }

  & .bodTitle h5 {
    text-align: center;
    font-family: "Crimson Text", serif;
    font-size: 1.3rem;
    font-weight: bold;
  }

  & .bodImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }
`;

const Board = () => {
    return (
      <AboutMain>
        <Header />
        <Boardwrapper>
          <Aboutheader abouttitle={"Board of Directors"}></Aboutheader>
          <AboutBody>
            <Aboutwrapper>
              <div className="row">
                <div className="bod col-md-3">
                  <div className="bodImg">
                    <img src="/img/user1.jpg" alt="" />
                  </div>
                  <div className="bodTitle">
                    <div className="top-bodTitle"></div>
                    <div className="bottom-bodTitle">
                      <h5>Lucy Kamura</h5>
                      <h5>Chairlady</h5>
                    </div>
                  </div>
                </div>
                <div className="bod col-md-3">
                  <div className="bodImg">
                    <img src="/img/user1.jpg" alt="" />
                  </div>
                  <div className="bodTitle">
                    <div className="top-bodTitle"></div>
                    <div className="bottom-bodTitle">
                      <h5>Agnes Miriti</h5>
                      <h5>Vice Chairperson</h5>
                    </div>
                  </div>
                </div>
                <div className="bod col-md-3">
                  <div className="bodImg">
                    <img src="/img/user1.jpg" alt="" />
                  </div>
                  <div className="bodTitle">
                    <div className="top-bodTitle"></div>
                    <div className="bottom-bodTitle">
                      <h5>Lennox Onyango</h5>
                      <h5>Treasurer</h5>
                    </div>
                  </div>
                </div>
                <div className="bod col-md-3">
                  <div className="bodImg">
                    <img src="/img/user1.jpg" alt="" />
                  </div>
                  <div className="bodTitle">
                    <div className="top-bodTitle"></div>
                    <div className="bottom-bodTitle">
                      <h5>Lucy Kamura</h5>
                      <h5>Chairlady</h5>
                    </div>
                  </div>
                </div>
                <div className="bod col-md-3">
                  <div className="bodImg">
                    <img src="/img/user1.jpg" alt="" />
                  </div>
                  <div className="bodTitle">
                    <div className="top-bodTitle"></div>
                    <div className="bottom-bodTitle">
                      <h5>Lucy Kamura</h5>
                      <h5>Chairlady</h5>
                    </div>
                  </div>
                </div>
                <div className="bod col-md-3">
                  <div className="bodImg">
                    <img src="/img/user1.jpg" alt="" />
                  </div>
                  <div className="bodTitle">
                    <div className="top-bodTitle"></div>
                    <div className="bottom-bodTitle">
                      <h5>Lucy Kamura</h5>
                      <h5>Chairlady</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Aboutwrapper>
          </AboutBody>
        </Boardwrapper>
        <Footer />
      </AboutMain>
    );
}

export default Board
