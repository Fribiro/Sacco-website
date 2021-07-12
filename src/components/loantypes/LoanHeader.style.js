import React from 'react'
import styled from 'styled-components'

const LoanHeaderWrapper = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  background: URL("/img/desk7.jpg");
  filter: brightness(60%);
  -webkit-filter: brightness(60%);
  background: no repeat center center scroll;
  -webkit-background-size: cover;
  background-size: cover;

  & .loanTitleType {
      position: absolute;
  }
`;

const LoanHeader = () => {
    return (
        <LoanHeaderWrapper>
            <h2 className="loanTitleType">Asset Finance</h2>
        </LoanHeaderWrapper>
    )
}

export default LoanHeader
