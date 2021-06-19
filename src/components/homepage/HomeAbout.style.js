import React from 'react'
import styled from "styled-components";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Main = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & .aboutWrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  & .content {
    width: 100%;
    height: 100%;
  }
  & .aboutLeftSection {
    width: 50%;
    height: 80%;
    background: url("/img/desk8.jpg") no-repeat center / cover;
  }

  & .aboutRightSection {
    width: 50%;
    height: 64%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -8rem;
    padding: 2rem;
    border-left: 1.5rem solid rgba(118, 191, 48);
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  }

  & .aboutButton {
    justify-content: center;
    align-items: center;
    background-color: rgba(118, 191, 48);
    color: rgb(255, 255, 255);
    border: 0;
    width: 6rem;
    height: 2.5rem;
  }

  ${media.mobile} {
    & .aboutWrapper {
      flex-direction: column;
      width: 100%;
      margin: 0 1.3rem;
    }
    & .aboutLeftSection {
      width: 100%;
      height: 100%;
    }
    & .aboutRightSection {
      width: 90%;
      height: 74%;
      margin: 0;
      margin-top: -4rem;
      padding: 1.3rem;
    }
  }
`;

const HomeAbout = () => {
    return (
      <div>
        <Main>
          <div className="aboutWrapper">
            <div className="aboutLeftSection">
              
            </div>
            <div className="aboutRightSection">
              <div className="content">
                <h2>About Us</h2>
                <p>
                  Uniq Sacco is one of the accredited saccos found within
                  Nairobi that has been established under strict adherance to
                  the Kenyan Laws.Save with us, get loans and grow with us. We offer
                  loans to cater for various needs.
                </p>
                <button className="aboutButton">More</button>
              </div>
            </div>
          </div>
        </Main>
      </div>
    );
}

export default HomeAbout
