import React from 'react'
import Header from '../Header.style'
import Footer from '../Footer.style'
import ContactCards from './ContactCards.style'
import HomeContactSection from '../homepage/HomeContactSection.style'

const Contact = () => {
    return (
        <div>
            <Header/>
            <ContactCards/>
            <HomeContactSection/>
            <Footer/>
        </div>
    )
}

export default Contact