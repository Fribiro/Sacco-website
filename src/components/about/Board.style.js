import React from 'react'
import styled from "styled-components";
import Footer from "../navigation/Footer.style";
import Header from "../navigation/Header.style";

const Boardwrapper = styled.div``;

const Board = () => {
    return (
      <div>
        <Header />
        <Boardwrapper></Boardwrapper>
        <Footer />
      </div>
    );
}

export default Board
