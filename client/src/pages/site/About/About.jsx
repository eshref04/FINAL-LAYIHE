import React from 'react'
import "./About.scss"
import HeroSection from '../../../components/site/Sections/About/AboutHeroSection/AboutHeroSection'
import HistorySection from '../../../components/site/Sections/About/HistorySection/HistorySection'
import SuccessSection from '../../../components/site/Sections/About/SuccessSection/SuccessSection'
import AdvantagesSection from '../../../components/site/Sections/About/AdvantagesSection/AdvantagesSection'
import QuestionsSection from '../../../components/site/Sections/About/QuestionsSection/QuestionsSection'
import AboutCardsSection from '../../../components/site/Sections/About/AboutCardsSection/AboutCardsSection'
import AboutSubsSection from '../../../components/site/Sections/About/AboutSubsSection/AboutSubsSection'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const About = () => {
  return (
    <>
    <Helmet>
      <title>About</title>
    </Helmet>
      <HeroSection/>
      <HistorySection/>
      <SuccessSection/>
      <AdvantagesSection/>
      <QuestionsSection/>
      <AboutCardsSection/>
      <AboutSubsSection/>
      <ScrollToTop/>
    </>
  )
}

export default About
