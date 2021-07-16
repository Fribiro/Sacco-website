import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-scroll"

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Headerhome = styled.div`
  height: 89vh;
  margin-top: 11vh;
  width: 100%;
  position: relative;

  & .carousel.slide.carousel-fade {
    height: 89vh;
  }

  & img.d-block.w-100 {
    height: 89vh;
    object-fit: cover;
    filter: brightness(50%);
  }

  & .carousel-item {
    //transition: opacity 1s ease-in-out;
  }

  & .carousel-caption {
    bottom: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & .carousel-caption h1 {
    font-family: "Abril Fatface", cursive;
    color: rgb(118, 191, 48);
  }

  & .carousel-caption p {
    font-family: "Crimson Text", serif;
    font-size: 1.3rem;
    width: 70%;
  }

  & button {
    border: 0;
    outline: none;
    width: 7rem;
    height: 3rem;
    background-color: rgb(118, 191, 48);
    color: #fff;
    font-family: "Crimson Text", serif;
    font-size: 1.3rem;
  }

  ${media.mobile} {
    height: 30vh;

    & .carousel.slide.carousel-fade {
      height: 100%;
    }

    & .carousel-item {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    & .carousel-item img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    & .carousel-inner {
      height: 100%;
    }

    & .carousel-caption {
      bottom: 2rem;
    }

    & .carousel-caption h1 {
    }

    & .carousel-caption p {
      display: none;
    }

    & button {
      width: 7rem;
      height: 2rem;
      font-size: 1rem;
    }
  }

  ${media.tablet} {
    height: 40vh;
    margin-top: 7vh;

    & .carousel.slide.carousel-fade {
      height: 100%;
    }

    & .carousel-item {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    & .carousel-item img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    & .carousel-inner {
      height: 100%;
    }

    & .carousel-caption {
      bottom: 8rem;
    }

    & .carousel-caption h1 {
    }

    & .carousel-caption p {
      display: none;
    }

    & button {
      width: 9rem;
      height: 3rem;
      font-size: 1.3rem;
    }
  }
`;


const Homeheader = () => {
    return (
      <Headerhome>
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/img/graphs.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Instant Loans</h1>
              <p>
                UNIK SACCO is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
              <button>
                <Link to="" spy={true} smooth={true}>
                  Read More
                </Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/img/desk7.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>Instant Loans</h1>
              <p>
                UNIK SACCO is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
              <button>
                <Link to="about" spy={true} smooth={true}>
                  Read More
                </Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/img/desk9.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Instant Loans</h1>
              <p>
                UNIK SACCO is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
              <button>
                <Link to="about" spy={true} smooth={true}>
                  Read More
                </Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Headerhome>
    );
}

export default Homeheader