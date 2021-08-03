import React from 'react'
import styled from "styled-components";
import Header from "../navigation/Header.style";
import Footer from "../navigation/Footer.style";
import ContactCards from './ContactCards.style'
import HomeContactSection from '../homepage/HomeContactSection.style'
import MetaDecorator from '../utils/Metadecorator';

const ContactMain = styled.div`
    overflow-y: hidden;
    overflow-x: hidden;
`

const Contact = () => {
    return (
      
      <ContactMain>
        <MetaDecorator
          title="Unik Sacco | Contact Us"
          description=""
        ></MetaDecorator>
        <Header />
        <ContactCards />
        <HomeContactSection />
        <Footer />
      </ContactMain>
    );
}

export default Contact