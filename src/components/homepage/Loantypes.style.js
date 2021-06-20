import React from 'react'
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const Main = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

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
    background-color: aqua;
  }

  & .cardDetails {
    width: 100%;
    height: 70%;
    padding: 4rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(118, 191, 48, 0.9);
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  }

  & .cardDetails h4 {
    color: #000;
  }

  & .cardDetails p {
    justify-content: center;
    align-items: center;
  }

  & .cardDetails button {
    justify-content: center;
    align-items: center;
    border: 0.2rem solid;
    background: transparent;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const Loantypes = () => {
    return (
      <div>
        <Main>
          <div className="loanWrapper">
            <Carousel></Carousel>
            <div className="loanCard">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4> Development Loan</h4>
                <p>You can only take this medium-term loan for investing purposes.You cannot have mmore than one credit at a time.</p>
                <button>Read More</button>
              </div>
            </div>
            <div className="loanCard">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4>Loan</h4>
                <p></p>
                <button>Read More</button>
              </div>
            </div>
            <div className="loanCard">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4>Loan</h4>
                <p></p>
                <button>Read More</button>
              </div>
            </div>
            <div className="loanCard">
              <div className="cardImg">
                <img src="/img/desk9.jpg" />
              </div>
              <div className="cardDetails">
                <h4>Loan</h4>
                <p></p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </Main>
      </div>
    );
}

export default Loantypes
