import React from 'react'
import "./Shop.scss"
import ShopHeroSection from '../../../components/site/Sections/Shop/ShopHeroSection/ShopHeroSection.'
import ShopSection from '../../../components/site/Sections/Shop/ShopSection/ShopSection'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const Shop = () => {
  return (
    <>
    <Helmet>
      <title>Shop</title>
    </Helmet>
    <ShopHeroSection/>
      <ShopSection/>
      <ScrollToTop/>
    </>
  )
}

export default Shop
