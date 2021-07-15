import React, { useState } from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup'

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Mainwrapper = styled.div`
  width: 100%;
  display: flex;

  & .counterImg {
    width: 50%;
    height: 17rem;
  }

  & .counterImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    -webkit-filter: brightness(50%);
  }

  & .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: rgba(118, 191, 48, 0.9);
  }

  & .box {
    width: 10rem;
    margin: 2rem 1rem;
    //background: rgba(136, 133, 133, 0.4);
    //-webkit-backdrop-filter: blur(1rem);
    //backdrop-filter: saturate(180%) blur(1rem) contrast(0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
    color: #333;
    border: 0.2rem dashed #333;
  }

  & .icon {
    width: 3rem;
    height: 3rem;
  }

  & .icon svg {
    width: 100%;
    height: 100%;
  }

  & .counter {
    font-size: 2rem;
    font-weight: bold;
  }

  & .text {
    font-size: 1.2rem;
    font-weight: bold;
  }

  ${media.mobile} {
    flex-direction: column;

    & .container {
      width: 100%;
      flex-wrap: wrap;
    }

    & .box {
      margin:  0.5rem;
    }

    & .icon {
      width: 2rem;
      height: 2rem;
    }

    & .icon svg {
      width: 100%;
      height: 100%;
    }

    & .counter {
      font-size: 1rem;
      font-weight: bold;
    }

    & .text {
      font-size: 1rem;
      font-weight: bold;
    }

    & #loans-awarded {
      font-size: .7rem;
      padding: 0;
    }

    & .counterImg {
      display: none;
    }

    & .container {
      width: 100%;
    }
  }

  ${media.tablet} {
  }
`;

const UnikCounter = () => {
  const [viewCountup, setViewCountup] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const onVisibilityChange = (e) => {
    if (isVisible) {
      setViewCountup(true);
    }
  };

    return (
      <div>
        <Mainwrapper>
          <div className="counterImg">
            <img src="/img/counterImg.jpg" alt="" />
          </div>
          <div className="container">
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon="users" />
              </div>
              <div className="counter">
                <CountUp start={0} end={100} duration={5} />
              </div>
              <div className="text">Members</div>
            </div>
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon="hands-helping" />
              </div>
              <div className="counter">
                <CountUp start={0} end={20} duration={5} />
              </div>
              <div className="text">Partners</div>
            </div>
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon="landmark" />
              </div>
              <div className="counter">
                <CountUp start={0} end={200} duration={5} />
              </div>
              <div className="text">Loans Awarded</div>
            </div>
          </div>
        </Mainwrapper>
      </div>
    );
}

export default UnikCounter
