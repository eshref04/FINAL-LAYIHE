import React from 'react'
import "./BlogHeroSection.scss"

const BlogHeroSection = () => {
  return (
    <section className="blog__hero__section">
      <div className="blog__hero__section__overlay"></div>
      <div className="blog__hero__section__heading container">
        <h1>Blog</h1>
        <p>CAPTION ALIGNED HERE</p>
      </div>
    </section>

  )
}

export default BlogHeroSection
