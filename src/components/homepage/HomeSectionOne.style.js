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

  & .title {
    color: rgba(118, 191, 48, 0.9);
    margin: 2rem;
    border-bottom: 0.2rem solid rgba(118, 191, 48, 0.9);
  }

  & .sectionOneWrapper {
    display: flex;
    width: 100%;
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

  & .col h2 {
    font-weight: 500;
    color: rgba(118, 191, 48, 0.9);
  }

  & .col p {
    justify-content: center;
    align-items: center;
    text-align: center;
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

    & .col h2 {
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

const HomeSectionOne = () => {
    return (
      <>
        <Main>
          <h2 className="title">Why Us</h2>
          <div className="sectionOneWrapper">
            <div className="col cardOne">
              <div className="icons">
                <img src="/icons/transparency.png" />
              </div>
              <h2>Transparency</h2>
              <p>
                Uniq Sacco is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
            </div>
            <div className="col cardTwo">
              <div className="icons">
                <img src="/icons/clipboard.png" />
              </div>
              <h2>Accountability</h2>
              <p>
                Uniq Sacco is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
            </div>
            <div className="col cardThree">
              <div className="icons">
                <img src="/icons/graph.png" />
              </div>
              <h2>Growth</h2>
              <p>
                Uniq Sacco is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
            </div>
            {/* <div className="col cardFour">
              <div className="icons">
                <img src="/icons/group.png" />
              </div>
              <h2>Participation</h2>
              <p>
                Uniq Sacco is one of the accredited saccos found within Nairobi
                that has been established under strict adherance to the Kenyan
                Laws.Save with us, get loans and grow with us.
              </p>
            </div> */}
          </div>
        </Main>
      </>
    );
}

export default HomeSectionOne