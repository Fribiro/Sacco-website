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
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
    background: URL("/img/footer.jpg");
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
    font-size: 1.7rem;
    color: rgb(118, 191, 48);
  }

  & .output-group > h5 {
    font-weight: bold;
    font-size: 1.4rem;
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
    font-size: 1.6rem;
  }

  & .input-group > input {
    //border-radius: 1rem;
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
    border-radius: .2rem;
  }
`;

const Calculator = () => {
    const [principal, setPrincipal] = useState("")
    const [interest, setInterest] = useState("")
    const [duration , setDuration] = useState("")
    const [monthlyPayment, setMonthlyPayment] = useState("")
    const [totalPayment, setTotalPayment] = useState("");

    const submitCalculation = (e) => {
      e.preventDefault()
    }

    const calculateLoan = (e) => {
      //e.preventDefault();
      //A = P(1 + r/n)^nt

      const totalPayment = (principal * Math.pow((1 + (interest/(12*100))), (12 * duration)));
      
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
                    <h5>Ksh{interest}</h5>
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
                    id="princpal"
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
                {/* <div className="input-group">
                  <input type="button" value="Calculate" onClick={(e) => {calculateLoan()}}/>
                </div> */}
              </div>
            </div>
          </Calc>
        </Mainwrapper>
      </div>
    );
}

export default Calculator
