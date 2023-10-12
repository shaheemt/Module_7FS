import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaPinterest } from 'react-icons/fa'
import  "./footer.css"

function Footer() {
  return (
   <div className="footer">
    <div className="container">
        <div className="footerSection">
            <div className="row justifyConter">
                <div className="footer-content">
                    <ul className="footerCircles">
                        <li><FaFacebook className='footerIcon'/></li>
                        <li><FaTwitter className='footerIcon'/></li>
                        <li><FaInstagram className='footerIcon'/></li>
                        <li><FaPinterest className='footerIcon'/></li>
                    </ul>
                    <div className="copy-right-content">
                        <p className="copyright">Copyright {new Date().getFullYear()} Shaheemt.com | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Footer