import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  padding: 2rem;

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
  }

  & .icons {
    width: 4rem;
    height: 4rem;
    margin: 1rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  & .icons img {
    width: 100%;
    height: 100%;
  }
`;

const HomeSectionOne = () => {
    return (
      <>
        <Main>
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
            <div className="col cardFour">
              <div className="icons">
                <img src="/icons/group.png" />
              </div>
              <h2>Participation</h2>
              <p>
                Uniq Sacco is one of the accredited saccos found within Nairobi
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