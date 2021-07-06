import React from 'react'
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Mainwrapper = styled.div`
  width: 100%;

  & .carousselContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10rem;
  }

  & .partnerLogo {
    width: 12rem;
    height: 6rem;
    margin: 0 1rem;
  }

  & .partnerLogo img {
    width: 100%;
    height: 100%;
  }

  & .react-multi-carousel-track {
  }

  & .react-multi-carousel-item {
    width: 8rem !important;
    margin: 0 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    align-items: center;
    font-family: "Abril Fatface", cursive;
    justify-content: center;
    color: rgba(118, 191, 48, 0.9);
    margin: 2rem;
  }

  & h2::after {
    content: "";
    background: rgba(118, 191, 48, 0.9);
    display: block;
    height: 0.2rem;
    width: 5rem;
    margin: 7px auto 5px;
  }
`;

const Partners = () => {
    return (
      <div>
        <Mainwrapper>
          <Title className="title">
            <h2>Partners</h2>
          </Title>
          <div className="carousselContainer">
            <div className="partnerLogo">
              <img src="/img/uniquet.png" alt="" />
            </div>
            <div className="partnerLogo">
              <img src="/img/coop.png" alt="" />
            </div>
            <div className="partnerLogo">
              <img src="/img/kcb.png" alt="" />
            </div>
            <div className="partnerLogo">
              <img src="/img/sumac.png" alt="" />
            </div>
          </div>
        </Mainwrapper>
      </div>
    );
}

export default Partners
