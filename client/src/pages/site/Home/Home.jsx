import React from 'react'
import "./Home.scss"
import HeroSection from '../../../components/site/Sections/Home/HeroSection/HeroSection.jsx'
import PracticeSection from '../../../components/site/Sections/Home/PracticeSection/PracticeSection.jsx'
import FormSection from '../../../components/site/Sections/Home/FormSection/FormSection.jsx'
import CardsSection from '../../../components/site/Sections/Home/CardsSection/CardsSection.jsx'
import ChooseSection from '../../../components/site/Sections/Home/ChooseSection/ChooseSection.jsx'
import ReviewSection from '../../../components/site/Sections/Home/ReviewSection/ReviewSection.jsx'
import CounterSection from '../../../components/site/Sections/Home/CounterSection/CounterSection.jsx'
import StudiesSection from '../../../components/site/Sections/Home/StudiesSection/StudiesSection.jsx'
import SponsorSection from '../../../components/site/Sections/Home/SponsorSection/SponsorSection.jsx'
import WordsSection from '../../../components/site/Sections/Home/WordsSection/WordsSection.jsx'
import ContactSection from '../../../components/site/Sections/Home/ContactSection/ContactSection.jsx'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop.jsx'


const Home = () => {
  return (
    
    
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <HeroSection/>
    <PracticeSection/>
    <FormSection/>
    <CardsSection/>
    <ChooseSection/>
    <ReviewSection/>
    <CounterSection/>
    <StudiesSection/>
    <SponsorSection/>
    <WordsSection/>
    <ContactSection/>
    <ScrollToTop/>
    </>
  )
}

export default Home
