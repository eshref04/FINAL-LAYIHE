import React from 'react'
import "./Attorney.scss"
import AttorneyHeroSection from '../../../components/site/Sections/Attorney/AttorneyHeroSection/AttorneyHeroSection'
import AttorneyCardsSection from '../../../components/site/Sections/Attorney/AttorneyCardsSection/AttorneyCardsSection'
import AttorneyAdvantagesSection from '../../../components/site/Sections/Attorney/AttorneyAdvantagesSection/AttorneyAdvantagesSection'
import AttorneyQuestionsSection from '../../../components/site/Sections/Attorney/AttorneyQuestionsSection/AttorneyQuestionsSection'
import AttorneyContactSection from '../../../components/site/Sections/Attorney/AttorneyContactSection/AttorneyContactSection'
import AttorneySponsorsSection from '../../../components/site/Sections/Attorney/AttorneySponsorsSection/AttorneySponsorsSection'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const Attorney = () => {
  return (
    <>
    <ScrollToTop/>
      <Helmet>
      <title>Attorney</title>
    </Helmet>
      <AttorneyHeroSection/>
      <AttorneyCardsSection/>
      <AttorneyAdvantagesSection/>
      <AttorneyQuestionsSection/>
      <AttorneyContactSection/>
      <AttorneySponsorsSection/>
      <ScrollToTop/>
    </>
  )
}

export default Attorney
