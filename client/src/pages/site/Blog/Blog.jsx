import React from 'react'
import "./Blog.scss"
import BlogHeroSection from '../../../components/site/Sections/Blog/BlogHeroSection/BlogHeroSection'
import BlogSection from '../../../components/site/Sections/Blog/BlogSection/BlogSection'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const Blog = () => {
  return (
    <>
      <Helmet>
      <title>Blog</title>
    </Helmet>
      <BlogHeroSection/>
      <BlogSection/>
      <ScrollToTop/>
    </>
  )
}

export default Blog
