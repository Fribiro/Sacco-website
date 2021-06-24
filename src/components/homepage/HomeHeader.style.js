import React from "react";
import styled from "styled-components";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Headerhome = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  & .headerText {
    position: absolute;
    vertical-align: middle;
    justify-content: center;
    text-align: center;
    width: 40rem;
    margin: 23rem 0 0 20rem;
  }

  & .headerText h1 {
    font-family: "Abril Fatface", cursive;
    color: rgb(118, 191, 48);
  }
  & .headerText p {
    color: #fff;
  }
  ${media.mobile} {
    height: 40vh;

    & .headerText {
      width: 20rem;
      margin: 9rem 0 0 2rem;
    }

    & .headerText h1 {
      font-family: "Abril Fatface", cursive;
      color: rgb(118, 191, 48);
    }
    & .headerText p {
      display: none;
    }
  }

  ${media.tablet} {
    height: 60vh;

    & .headerText {
      width: 30rem;
      margin: 12rem 0 0 5rem;
    }

    & .headerText h1 {
      font-family: "Abril Fatface", cursive;
      color: rgb(118, 191, 48);
    }
    & .headerText p {
      color: #fff;
    }
  }
`;

const Bgimg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  display: block;
  background: url("/img/graphs.jpg") no-repeat center / cover;
  filter: brightness(40%);
`;

const Homeheader = () => {
    return (
        <Headerhome>
            <Bgimg></Bgimg>
            <div className="headerText">
                <h1>Instant Loans</h1>
                <p>Uniq Sacco is one of the accredited saccos found within Nairobi that has been established under strict adherance to the Kenyan Laws.Save with us, get loans and grow with us.</p>
            </div>
        </Headerhome>
    )
}

export default Homeheader