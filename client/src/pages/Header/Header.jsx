import React from 'react'
import  "./Header.css"

function Header() {
  return (
    <header className="header" id="Header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header__content">
                        <div className="header-section">
                            <h2>Hellow, I Am</h2>
                            <span>s</span>
                            <span>h</span>
                            <span>a</span>
                            <span>h</span>
                            <span>e</span>
                            <span>e</span>
                            <span>m</span>
                            <span>.</span>
                            <span>t</span>
                            <p> You can add webfonts, meta tags, or analytics to this file.
                            The build step will place the bundled <br />scripts into the  tag.</p>
                            <div className="header__buttons">
                                <a href="header" className='btn btn-outline'>
                                    Hire me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-6">
                 <div className='image-container'>
                    <img src="./image/photo.jpg" alt="" className="image"/>
                </div> 
                </div>  
                 
            </div>
        </div>
    </header>
  )
}

export default Header