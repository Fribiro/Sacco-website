import React from 'react'
import styled from 'styled-components'
import Header from "../navigation/Header.style";
import Footer from "../navigation/Footer.style";
import Calculator from './Calculator.style'

const CalculatorMain = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Loancalculator = () => {
    return (
        <CalculatorMain>
            <Header/>
            <Calculator/>
            <Footer/>
        </CalculatorMain>
    )
}

export default Loancalculator
