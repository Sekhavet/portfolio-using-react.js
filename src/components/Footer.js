import "./FooterStyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>
                            Haciqabul, Nasimi 34
                        </p>
                        <p>
                            Azerbaijan
                        </p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        +994 70-508-31-12
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        sekhavetx7@gmail.com
                    </h4>
                </div>
            </div>
                
            <div className="right">
                <h4>About the creator</h4>
                <p>This is me Sekhavet. Frontend react developer. I enjoy coding projects and explaining "how".</p>
                <div className="social">
                    <Link to="https://www.facebook.com/sexavet.emirli.58"><FaFacebook size={30} style={{color: "#fff", marginRight: "2rem"}}/></Link>
                    <Link to="https://www.instagram.com/sekhavettt"><FaInstagram size={30} style={{color: "#fff", marginRight: "2rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer