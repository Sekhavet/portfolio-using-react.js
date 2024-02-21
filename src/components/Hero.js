import React from 'react'
import "./HeroStyles.css"
import introImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={introImg} alt='hero-img'/>
      </div>
      <div className='content'>
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <div className='btns'>
          <Link to="projects" className='btn'>Projects</Link>
          <Link to="contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero