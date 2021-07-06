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

const LoanWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Card = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;

  &:nth-child(1) .box .content a {
    background: #2196f3;
  }

  &:nth-child(2) .box .content a {
    background: #e91e63;
  }

  &:nth-child(3) .box .content a {
    background: #23c186;
  }
`;

const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: rgb(118, 191, 48);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: translateY(-50px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    //background: rgba(0, 0, 0, 0.04);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0.04);
  }
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;

  & h2 {
    position: absolute;
    top: -10px;
    right: 58px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.2);
  }

  & h3 {
    font-size: 1.8rem;
    color: #fff;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
  }

  & p {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    transition: 0.5s;
  }

  & a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  & a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
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
    width: 4rem;
    margin: 7px auto 5px;
  }
`;

const Loantypes = () => {
    return (
      <LoanWrapper>
        <Title>
          <h2>Loans</h2>
        </Title>
        <Carousel
          swipeable
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          sliderClass=""
          slidesToSlide={3}
          swipeable
          style={{}}
        >
          <Card>
            <Box>
              <Content>
                <h2>01</h2>
                <h3>Development Loan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </Content>
            </Box>
          </Card>

          <Card>
            <Box>
              <Content>
                <h2>02</h2>
                <h3>Emergency Loan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </Content>
            </Box>
          </Card>

          <Card>
            <Box>
              <Content>
                <h2>03</h2>
                <h3>Normal Loan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </Content>
            </Box>
          </Card>

          <Card>
            <Box>
              <Content>
                <h2>04</h2>
                <h3>Education Loan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </Content>
            </Box>
          </Card>

          <Card>
            <Box>
              <Content>
                <h2>05</h2>
                <h3>Asset Finance</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </Content>
            </Box>
          </Card>
        </Carousel>
      </LoanWrapper>
    );
}

export default Loantypes
