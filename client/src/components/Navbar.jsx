import {Link} from "react-scroll"
import React from 'react'
import {FaAlignJustify} from "react-icons/fa";
// import {Link} from "react-scroll"
import './Navbar.css'

function Navbar() {
  const [state, setstate] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="../image/stk.jpg" alt="" />
            </div>
          </ul>
          {state ? (
             <nav>
             <ul className="navbar__right">
              
              <Link spy={true} to="Header" smooth={true} activeClass="active"> <li>Header</li></Link>
              <Link spy={true} to="About" smooth={true}> <li>About</li></Link>
              <Link spy={true} to="Skill" smooth={true}> <li>Skill</li></Link>
              <Link spy={true} to="Contact" smooth={true}> <li>Contact</li></Link>
               
             </ul>
            </nav>
          ):(
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setstate(!state)}>
       <FaAlignJustify />
      </div>
    </nav>
  )
}

export default Navbar;