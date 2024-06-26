import React from 'react'
import "./Contact.scss"
import ContactHeroSection from '../../../components/site/Sections/Contact/ContactHeroSection/ContactHeroSection'
import LinkSection from '../../../components/site/Sections/Contact/LinkSection/LinkSection'
import ContactFormSection from '../../../components/site/Sections/Contact/ContactFormSection/ContactFormSection'
import MapSection from '../../../components/site/Sections/Contact/MapSection/MapSection'
import IconSection from '../../../components/site/Sections/Contact/IconSection/IconSection'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const Contact = () => {
  return (
    <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
      <ContactHeroSection/>
      <LinkSection/>
      <ContactFormSection/>
      <MapSection/>
      <IconSection/>
      <ScrollToTop/>
    </>
  )
}

export default Contact
