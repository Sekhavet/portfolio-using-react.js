import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import Img1 from "../assets/react1.jpg"
import Img2 from "../assets/react2.webp"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>
                Im a frontend react developer. I create responsive websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Img1} className="img" alt="Img1"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Img2} className="img" alt="Img2"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent