import React from 'react'
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

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
}

const Mainwrapper = styled.div`
  & .testimonials {
    margin: 1rem 6.25rem;
    height: 30rem;
  }

  & .testimonials-container p {
    text-align: center;
  }

  & .testimonials .row {
    margin-top: 1.8rem;
  }

  & .col-md-4 {
    margin: 2.5rem auto;
  }

  & .profile {
    padding: 4.4rem 0.8rem 0.8rem 0.8rem;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    height: 24rem;
  }

  & .profile img {
    top: -60px;
    position: absolute;
    left: calc(50% - 60px);
    border: 0.63rem solid white;
  }

  & .user {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
  }
  & .testimonialmember {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .profile h3 {
    font-size: 1.25rem;
    margin-top: 0.94rem;
    color: rgba(118, 191, 48, 0.9);
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }

  & .profile h3 span {
    color: #333;
    font-size: 0.9rem;
    margin-left: 0.5rem;
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }

  & blockquote {
    font-size: 1rem;
    line-height: 1.6rem;
    height: 70%;
  }

  & blockquote::before {
    content: "“";
    font-size: 3rem;
    position: relative;
    color: rgba(118, 191, 48, 0.9);
    line-height: 1.25rem;
    bottom: -0.94rem;
    right: 0.31rem;
  }

  & blockquote::after {
    content: "”";
    font-size: 3rem;
    position: relative;
    color: rgba(118, 191, 48, 0.9);
    line-height: 0.63rem;
    bottom: -0.94rem;
    left: 0.31rem;
  }

  & .profile:hover {
    box-shadow: 0 0 0.94rem 0.94rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s;
  }

  ${media.mobile} {
    & .testimonials {
      margin: 1rem 2rem;
      height: fit-content;
    }
  }
  ${media.tablet} {
    & .testimonials {
      margin: 1rem;
      height: fit-content;
    }

    & .profile {
      height: fit-content;
    }
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

  &  h2::after {
    content: "";
    background: rgba(118, 191, 48, 0.9);
    display: block;
    height: 0.2rem;
    width: 10rem;
    margin: 0.44rem auto .31rem;
  }
`;

const Testimonials = () => {
    return (
      <div>
        <Mainwrapper>
          <Title>
            <h2>Testimonials</h2>
          </Title>
          <section className="testimonials">
            <div className="testimonial-container">
              <p></p>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="/img/user1.jpg" alt="" className="user" />
                    <blockquote>
                      Becoming a member of Unik Sacco was one of the greatest
                      decisions I have ever made. As I reflect back on when it
                      all began my heart is filled with joy and satisfaction
                      with regards to the decison I made. So far through their
                      savings product I have managed and continue to amass money
                      for the realization of my dreams.
                    </blockquote>
                    <div className="testimonialmember">
                      <h3>Festus Festus</h3>
                      <span> Group CEO &amp; Founder of Topnotch</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="/img/user2.jpg" alt="" className="user" />
                    <blockquote>
                      Becoming a member of Unik Sacco was one of the greatest
                      decisions I have ever made. As I reflect back on when it
                      all began my heart is filled with joy and satisfaction
                      with regards to the decison I made. So far through their
                      savings product I have managed and continue to amass money
                      for the realization of my dreams.
                    </blockquote>
                    <div className="testimonialmember">
                      <h3>Olive Olive</h3>
                      <span> Regional Manager ABC</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="/img/user3.jpg" alt="" className="user" />
                    <blockquote>
                      Becoming a member of Unik Sacco was one of the greatest
                      decisions I have ever made. As I reflect back on when it
                      all began my heart is filled with joy and satisfaction
                      with regards to the decison I made. So far through their
                      savings product I have managed and continue to amass money
                      for the realization of my dreams.
                    </blockquote>
                    <div className="testimonialmember">
                      <h3>Kris Kris</h3>
                      <span>Banker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Mainwrapper>
      </div>
    );
}

export default Testimonials
