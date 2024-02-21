import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Pricing from '../components/Pricing'
import Works from '../components/Works'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 
        heading="PROJECTS" 
        text="Some of my recent works."
      />
      <Works/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Projects