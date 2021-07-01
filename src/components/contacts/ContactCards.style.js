import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  height: 40rem;

  & .title {
    color: rgba(118, 191, 48, 0.9);
    margin: 2rem;
    border-bottom: 0.2rem solid rgba(118, 191, 48, 0.9);
  }

  & .sectionOneWrapper {
    display: flex;
    width: 85%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  & .col {
    display: flex;
    padding: 1rem 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.7rem;
    //border: 0.1rem solid rgba(51, 51, 51, .5);
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  }

  & .col1,
  .col2,
  .col3 {
    width: 100%;
    padding: 1rem;
  }

  & .cardOne,
  .cardFour {
    border-top: 0.4rem solid rgba(118, 191, 48, 0.9);
  }

  & .cardTwo,
  .cardThree {
    border-top: 0.4rem solid rgba(0, 0, 0, 0.9);
  }

  & .col,
  .cardTwo {
    margin-bottom: 2rem;
  }

  & .col2 {
    justify-content: space-between;
  }

  & .cardOne h3,
  .cardFour h3 {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
  }

  & .cardTwo h3,
  .cardThree h3 {
    font-weight: 500;
    color: rgba(118, 191, 48, 0.9);
  }

  & .col p {
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
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
      border: #333;
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
    height: 50rem;
  }
`;

const ContactCards = () => {
    return (
      <div>
        <Main>
          <h3 className="title">Contact Us</h3>
          <div className="sectionOneWrapper">
            <div className="col1">
              <div className="col cardOne">
                <div className="icons">
                  <FontAwesomeIcon icon="map-marker-alt" />
                </div>
                <h3>Phone</h3>
                <p>
                  Unik Sacco is one of the accredited saccos found within
                  Nairobi that has been established under strict adherance to
                  the Kenyan Laws.Save with us, get loans and grow with us.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="col cardTwo">
                <div className="icons">
                  <FontAwesomeIcon icon="phone-alt" />
                </div>
                <h3>Address</h3>
                <p>
                  Unik Sacco is one of the accredited saccos found within
                  Nairobi that has been established under strict adherance to
                  the Kenyan Laws.Save with us, get loans and grow with us.
                </p>
              </div>

              <div className="col cardThree">
                <div className="icons">
                  <img src="/icons/graph.png" />
                </div>
                <h3>Growth</h3>
                <p>
                  Unik Sacco is one of the accredited saccos found within
                  Nairobi that has been established under strict adherance to
                  the Kenyan Laws.Save with us, get loans and grow with us.
                </p>
              </div>
            </div>
            <div className="col3">
              <div className="col cardFour">
                <div className="icons">
                  <FontAwesomeIcon icon="paper-plane" />
                </div>
                <h3>Email</h3>
                <p>
                  Unik Sacco is one of the accredited saccos found within
                  Nairobi that has been established under strict adherance to
                  the Kenyan Laws.Save with us, get loans and grow with us.
                </p>
              </div>
            </div>
          </div>
        </Main>
      </div>
    );
}

export default ContactCards
