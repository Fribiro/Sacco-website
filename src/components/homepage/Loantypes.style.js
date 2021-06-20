import React from 'react'
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  background-color: rgba(118, 191, 48, 0.9);
`;

const Loantypes = () => {
    return (
        <div>
            <Main>
                <div className="loanWrapper">
                    <div className="loanCard">
                        <div className="cardImg"></div>
                        <div className="cardDetails">
                            <h2>Loan</h2>
                            <p></p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </Main>
        </div>
    )
}

export default Loantypes
