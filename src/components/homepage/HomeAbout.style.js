import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Main = styled.div`
  width: 100%;
  height: 35rem;
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

  & .content h2 {
    font-family: "Abril Fatface", cursive;
  }

  & .content p {
    font-family: "Crimson Text", serif;
    font-size: 1rem;
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
    //backdrop-filter: blur(1rem) contrast(0.8);
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

  & .aboutButton a {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  ${media.mobile} {
    margin: 2rem 0;
    height: 45rem;

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
      padding: 0.9rem;
      border-left: 0.9rem solid rgba(118, 191, 48);
    }

    & .aboutButton {
      width: 7rem;
      height: 2rem;
    }
  }

  ${media.tablet} {
    height: 40rem;

    & .aboutWrapper {
      width: 95%;
    }
    & .aboutLeftSection {
      width: 60%;
    }
    & .aboutRightSection {
      width: 60%;
      height: 65%;
      padding: 1.6rem;
      text-align: justify;
    }

    & .aboutRightSection .content p {
      
    }
  }
`;

const HomeAbout = () => {
    return (
      <div>
        <Main>
          <div name="about" className="aboutWrapper">
            <div className="aboutLeftSection"></div>
            <div className="aboutRightSection">
              <div className="content">
                <h2>About Us</h2>
                <p>
                  UNIK SACCO is a reputable Savings and Credit Co-operative
                  Society registered in 2020 under the Co-operative Societies
                  Act (Cap.490) of the Laws of Kenya by Unique tracking company,
                  out of the need to provide savings and affordable credit
                  facilities to its employees. Our success is attributed to our
                  vision “To be the most accredited Sacco of Excellence among
                  the best managed in the country”. Our record of accomplishment
                  is felt everywhere, from our strongest asset, our employees,
                  competitive products portfolio, strong market positioning and
                  digital presence.
                </p>
                <button className="aboutButton"><Link to="/who-we-are">Read More</Link></button>
              </div>
            </div>
          </div>
        </Main>
      </div>
    );
}

export default HomeAbout
