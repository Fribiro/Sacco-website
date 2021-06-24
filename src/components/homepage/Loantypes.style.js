import React from 'react'
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Main = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .title {
    color: rgba(118, 191, 48, 0.9);
    margin: 2rem;
    border-bottom: 0.2rem solid rgba(118, 191, 48, 0.9);
  }

  & .loanWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
  }

  & .loanCard {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.7rem;
    width: 95%;
    height: 100%;
    flex-direction: column;
  }

  & .cardImg {
    width: 80%;
    height: 40%;
    margin: 0;
    margin-bottom: -4rem;
    z-index: 1;
  }

  & .cardImg img {
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
  }

  & .cardDetails {
    width: 100%;
    height: 70%;
    padding: 5rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(118, 191, 48, 0.9);
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  }

  & .cardDetails h4 {
    color: #fff;
  }

  & .cardDetails p {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & .cardDetails button {
    justify-content: center;
    align-items: center;
    border: 0.15rem solid #fff;
    color: #fff;
    background: transparent;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    width: 10rem;
  }
`;

const Loantypes = () => {
    return (
      <div>
        <Main>
          <h2 className="title">Loans</h2>
          {/* <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            //autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          > */}
            <div className="loanWrapper">
            <div className="loanCard">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4> Development Loan</h4>
                <p>
                  You can only take this medium-term loan for investing
                  purposes.You cannot have more than one credit at a time.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="loanCard md-4">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4>Emergency Loan</h4>
                <p>
                  You can only take this medium-term loan for investing
                  purposes.You cannot have mmore than one credit at a time.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="loanCard">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4>Normal Loan</h4>
                <p>
                  You can only take this medium-term loan for investing
                  purposes.You cannot have mmore than one credit at a time.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="loanCard">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4>Basic Loan</h4>
                <p>
                  You can only take this medium-term loan for investing
                  purposes.You cannot have mmore than one credit at a time.
                </p>
                <button>Read More</button>
              </div>
            </div>
            </div>
          {/* </Carousel> */}
        </Main>
      </div>
    );
}

export default Loantypes
