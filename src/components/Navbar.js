import React, { useState } from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setDropdown(!dropdown)

  const [color, setcolor] = useState(false)
  const changeColor = () => { 
    if (window.scrollY >=100) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul className={dropdown ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      
      <div className='dropdown-menu' onClick={handleClick}>
        {
          dropdown 
            ?
              (<FaTimes size={20} style={{color: "#fff"}}/>) 
            :
              (<FaBars size={20} style={{color: "#fff"}}/>)
        }
      </div>
    </div>
  )
}

export default Navbar