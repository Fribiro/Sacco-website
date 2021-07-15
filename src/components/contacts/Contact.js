import React from 'react'
import styled from "styled-components";
import Header from "../navigation/Header.style";
import Footer from "../navigation/Footer.style";
import ContactCards from './ContactCards.style'
import HomeContactSection from '../homepage/HomeContactSection.style'

const ContactMain = styled.div`
    overflow-y: hidden;
    overflow-x: hidden;
`

const Contact = () => {
    return (
        <ContactMain>
            <Header/>
            <ContactCards/>
            <HomeContactSection/>
            <Footer/>
        </ContactMain>
    )
}

export default Contact