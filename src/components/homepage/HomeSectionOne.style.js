import React from "react";
import styled from "styled-components";

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Main = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* & .title {
    color: rgba(118, 191, 48, 0.9);
    margin: 2rem;
  } */

  & .sectionOneWrapper {
    display: flex;
    width: 85%;
    justify-content: center;
    align-items: center;
  }

  & .col {
    display: flex;
    padding: 1rem 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.7rem;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  }

  & .col h3 {
    font-weight: 500;
    color: rgba(118, 191, 48, 0.9);
  }

  & .col p {
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: .9rem;
  }

  & .icons {
    width: 4rem;
    height: 4rem;
    margin: 1rem;
  }

  & svg {
    width: 100%;
    height: 100%;
  }

  & .icons img {
    width: 100%;
    height: 100%;
  }

  ${media.mobile} {
    flex-direction: column;

    & .title {
      margin: 1rem;
    }

    & .sectionOneWrapper {
      flex-direction: column;
      width: 100%;
    }

    & .col {
      margin: 0.7rem 0.7rem;
      box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    }

    & .col h2 {
    }

    & .col p {
    }

    & .icons {
      width: 4rem;
      height: 4rem;
      margin: 1rem;
    }
  }

  ${media.tablet} {
    padding: 0 1rem;
    height: 25rem;

    & .title {
      margin: 0 0 1.5rem 0;
    }

    & .sectionOneWrapper {
    }

    & .col {
      padding: 0.1rem 0.3rem;
      margin: 0 0.2rem;
      box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    }

    & .col h3 {
      font-weight: 500;
      font-size: 1.2rem;
      color: rgba(118, 191, 48, 0.9);
    }

    & .col p {
      font-size: 0.85rem;
    }

    & .icons {
      width: 3rem;
      height: 3rem;
      margin: 1rem;
    }
  }

  ${media.desktop} {
    height: 30rem;
  }

  ${media.extralarge} {
    height: 30rem;
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
`

const HomeSectionOne = () => {
    return (
      <>
        <Main>
          <Title>
            <h2 className="title">Why Us</h2>
          </Title>
          <div className="sectionOneWrapper">
            <div className="col cardOne">
              <div className="icons">
                <img src="/icons/transparency.png" />
              </div>
              <h3>Transparency</h3>
              <p>
                Unik Sacco is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
            </div>
            <div className="col cardTwo">
              <div className="icons">
                <img src="/icons/clipboard.png" />
              </div>
              <h3>Accountability</h3>
              <p>
                Unik Sacco is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
            </div>
            <div className="col cardThree">
              <div className="icons">
                <img src="/icons/graph.png" />
              </div>
              <h3>Growth</h3>
              <p>
                Unik Sacco is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
            </div>
          </div>
        </Main>
      </>
    );
}

export default HomeSectionOne