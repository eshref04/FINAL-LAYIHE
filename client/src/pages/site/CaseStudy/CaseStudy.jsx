import React from 'react'
import "./CaseStudy.scss"
import CaseHeroSection from '../../../components/site/Sections/CaseStudy/CaseHeroSection/CaseHeroSection'
import CaseCardsSection from '../../../components/site/Sections/CaseStudy/CaseCardsSection/CaseCardsSection'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const CaseStudy = () => {
  return (
    <>
    <Helmet>
      <title>Case Study</title>
    </Helmet>
      <CaseHeroSection/>
      <CaseCardsSection/>
      <ScrollToTop/>
    </>
  )
}

export default CaseStudy
