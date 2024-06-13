import React from 'react'
import "./Home.scss"
import HeroSection from '../../../components/site/Sections/Home/HeroSection/HeroSection.jsx'
import PracticeSection from '../../../components/site/Sections/Home/PracticeSection/PracticeSection.jsx'
import FormSection from '../../../components/site/Sections/Home/FormSection/FormSection.jsx'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <PracticeSection/>
    <FormSection/>
    </>
  )
}

export default Home
