import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Works from "../components/Works"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default Home