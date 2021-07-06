import React, { useState } from 'react'
import styled from "styled-components";

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
` 
const Calc = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  & .calc-container {
    background-color: rgb(118, 191, 48);
    width: 70%;
    display: flex;
    justify-content: center;
  }

  & .calc-output {
    width: 50%;
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
    font-size: 1.5rem;
  }

  & .input-group > input {
    border-radius: 1rem;
    border: 0;
  }

  & input[type="text"] {
    outline: none;
    padding: 0.3rem 0.8rem;
  }
`;

const Calculator = () => {
    const [loanAmount, setLoanAmount] = useState("")
    const [interestPa, setInterestPa] = useState("")
    const [duration , setDuration] = useState("")
    const [monthlyPayment, setMonthlyPayment] = useState("")
    const [totalPayment, setTotalPayment] = useState("");
    const [interest, setInterest] = useState("");

    return (
      <div>
        <Mainwrapper>
          <Title>
            <h2>Loan Calculator</h2>
          </Title>
          <Calc>
            <div className="calc-container">
              <div className="calc-output">
                  <div className="output-group">
                      <h4>Monthly Payment</h4>
                      <h5>Ksh{monthlyPayment}</h5>
                  </div>
                  <div className="output-group">
                      <h4>Interest to be paid</h4>
                      <h5>Ksh{interest}</h5>
                  </div>
                  <div className="output-group">
                      <h4>Total Repayment</h4>
                      <h5>Ksh{totalPayment}</h5>
                  </div>
              </div>
              <div className="calc-form">
                <div className="input-group">
                  <label htmlFor="loan-amount">Loan Amount</label>
                  <input type="text" name="loan-amount" id="loan-amount" />
                </div>
                <div className="input-group">
                  <label htmlFor="annual-interest">Annual Interest(%)</label>
                  <input
                    type="text"
                    name="annual-interest"
                    id="annual-interest"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="duration">Duration(Months)</label>
                  <input type="text" name="duration" id="duration" />
                </div>
                <div className="input-group">
                  <input type="button" value="Calculate" />
                </div>
              </div>
            </div>
          </Calc>
        </Mainwrapper>
      </div>
    );
}

export default Calculator
