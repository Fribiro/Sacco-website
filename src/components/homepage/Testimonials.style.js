import React from 'react'
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  & .testimonials h2 {
    text-align: center;
    font-weight: bold;
    color: #3db2c7;
    padding-bottom: 10px;
  }

  & .testimonials h2::after {
    content: "";
    background: #3db2c7;
    display: block;
    height: 3px;
    width: 170px;
    margin: 7px auto 5px;
  }

  & .testimonials .row {
    margin-top: 30px;
  }

  & .col-md-4 {
    margin: 40px auto;
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
    border: 10px solid white;
  }

  & .user {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  & .testimonialmember {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .profile h3 {
    font-size: 20px;
    margin-top: 15px;
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
    line-height: 20px;
    bottom: -15px;
    right: 5px;
  }

  & blockquote::after {
    content: "”";
    font-size: 3rem;
    position: relative;
    color: rgba(118, 191, 48, 0.9);
    line-height: 10px;
    bottom: -15px;
    left: 5px;
  }

  & .profile:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s;
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
    margin: 7px auto 5px;
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
                      <span> Group CEO &amp; a Shareholder of Topnotch</span>
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
