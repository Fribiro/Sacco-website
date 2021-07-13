import React from 'react'
import styled from "styled-components";
import Footer from "../navigation/Footer.style";
import Header from "../navigation/Header.style";

const Storywrapper = styled.div``;

const Ourstory = () => {
    return (
      <div>
        <Header />
        <Storywrapper></Storywrapper>
        <Footer />
      </div>
    );
}

export default Ourstory
