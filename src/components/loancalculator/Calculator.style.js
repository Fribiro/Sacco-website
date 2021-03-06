import React, { useState } from 'react'
import styled from "styled-components";

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Mainwrapper = styled.div`
    margin-top: 4.9rem;
    //height: 40rem;
`

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
    width: 12rem;
    margin: 7px auto 5px;
  }

  ${media.mobile} {
  }

  ${media.tablet} {
  }
`; 
const Calc = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  & .calc-container {
    background-color: rgb(118, 191, 48);
    width: 70%;
    display: flex;
    justify-content: center;
  }

  & .calc-output {
    width: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
    background: URL("/img/woodenbridge.jpg");
    background: no repeat center center scroll;
    backdrop-filter: brightness(40%);
    -webkit-background-size: cover;
    background-size: cover;
    z-index: 1;
  }

  & .frozen-glass {
    margin: 0 5rem;
    height: 60%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: transparent;
    backdrop-filter: blur(0.7rem) contrast(0.7) brightness(100%);
  }

  & .output-group {
    //width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 1rem 1rem 0.5rem qrem;
    font-family: "Crimson Text", serif;
    position: relative;
  }

  & .output-group > h4 {
    font-weight: bolder;
    font-size: 1.4rem;
    color: rgb(118, 191, 48);
  }

  & .output-group > h5 {
    font-weight: bold;
    font-size: 1.2rem;
    color: #fff;
  }

  & .calc-form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  & .input-group {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0.5rem;
  }

  & .input-group > label {
    font-family: "Crimson Text", serif;
    font-size: 1.4rem;
  }

  & input#principal,
  input#interest,
  input#duration {
    border-radius: 1rem;
  }

  & .input-group > input {
    border: 0;
  }

  & input[type="number"] {
    font-family: "Crimson Text", serif;
    outline: none;
    padding: 0.3rem 0.8rem;
  }

  & input[type="button"] {
    font-family: "Crimson Text", serif;
    font-size: 1.4rem;
    outline: none;
    padding: 0.3rem 0.8rem;
    color: #fff;
    background-color: #000;
    border-radius: 2rem;
    width: 10rem;
  }
  ${media.mobile} {
    height: fit-content;

    & .calc-container {
      width: 80%;
      flex-direction: column;
    }
    & .calc-output {
      width: 100%;
    }
    & .frozen-glass {
      margin: 1rem;
      height: 100%;
    }

    & .calc-form {
      width: 100%;
    }
  }

  ${media.tablet} {
    height: fit-content;

    & .calc-container {
      width: 90%;
      height: 100%;
    }
    & .calc-output {
      width: 100%;
      height: 100%;
    }
    & .frozen-glass {
      margin: 1rem;
      height: 100%;
    }

    & .calc-form {
      width: 100%;
    }
  }
`;

const Disclaimer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .disclaimerLeft {
    width: 70%;
  }
  ${media.mobile} {
    & .disclaimerLeft {
      width: 85%;
    }
  }

  ${media.tablet} {
  }
`;

const DisclaimerTitle = styled.h2`
  width: 50%;

  & h2 {
    color: red;
    margin-top: 0;
    font-family: "Abril Fatface", cursive;
  }

  ${media.mobile} {
  }

  ${media.tablet} {
  }
`;

const DisclaimerText = styled.ul`
  width: 70%;
  display: inline-block;
  list-style: circle solid black;

  ${media.mobile} {
    width: 100%;
  }

  ${media.tablet} {
    width: 100%;
  }
`;

const Calculator = () => {
    const [principal, setPrincipal] = useState("")
    const [interest, setInterest] = useState("")
    const [duration , setDuration] = useState("")
    const [monthlyPayment, setMonthlyPayment] = useState("")
    const [totalPayment, setTotalPayment] = useState("");
    const [totalInterest, setTotalInterest] = useState("");

    const submitCalculation = (e) => {
      e.preventDefault()
    }

    const calculateLoan = (e) => {
      //A = P * (r(1 + r)^n) / ((1 + r)^n - 1)

      const intr = (interest/1200)

      const monthlyPayment = duration ? (principal * intr / (1 - (Math.pow(1/(1 + intr), duration)))) : 0;

      const totalPayment = duration * monthlyPayment;

      const TotalAmountofCredit = ((monthlyPayment / intr) * (1 - Math.pow((1 + intr), (-duration))));

      const totalInterest = (totalPayment - TotalAmountofCredit);

      setMonthlyPayment(monthlyPayment.toFixed(2));
      setTotalInterest(totalInterest.toFixed(2));
      setTotalPayment(totalPayment.toFixed(2));
    }

    return (
      <div>
        <Mainwrapper>
          <Title>
            <h2>Loan Calculator</h2>
          </Title>
          <Calc>
            <div className="calc-container">
              <div className="calc-output">
                <div className="frozen-glass">
                  <div className="output-group">
                    <h4>Monthly Payment</h4>
                    <h5>Ksh{monthlyPayment}</h5>
                  </div>
                  <div className="output-group">
                    <h4>Interest to be paid</h4>
                    <h5>Ksh{totalInterest}</h5>
                  </div>
                  <div className="output-group">
                    <h4>Total Repayment</h4>
                    <h5>Ksh{totalPayment}</h5>
                  </div>
                </div>
              </div>
              <div className="calc-form">
                <div className="input-group">
                  <label htmlFor="principal">Loan Amount</label>
                  <input
                    type="number"
                    name="principal"
                    id="principal"
                    onChange={(e) => setPrincipal(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="interest">Interest(%)</label>
                  <input
                    type="number"
                    name="interest"
                    id="interest"
                    onChange={(e) => setInterest(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="duration">Duration(Months)</label>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="button"
                    value="Calculate"
                    onClick={(e) => {
                      calculateLoan();
                    }}
                  />
                </div>
              </div>
            </div>
          </Calc>
          <Disclaimer>
            <div className="disclaimerLeft">
              <DisclaimerTitle>
                <h2>Disclaimer!</h2>
              </DisclaimerTitle>
              <DisclaimerText>
                <li>
                  The estimate provided is not a loan contract and is a
                  non-binding approximation of the cost of the sacco loan in an
                  effort to help prospective borrowers estimate loan costs. If
                  you are interested in getting a loan with us, you should
                  contact us directly.
                </li>
                <li>The interest is calculated on a reducing balance basis.</li>
                <li>
                  The external charges featured here are estimates on third
                  party costs that are associated with the loan facility that
                  you wish to apply for.
                </li>
                <li>
                  Please contact us for further details on the total cost of
                  credit for the loan you wish to apply for.
                </li>
              </DisclaimerText>
            </div>
          </Disclaimer>
        </Mainwrapper>
      </div>
    );
}

export default Calculator
