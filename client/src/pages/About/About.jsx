import React from 'react'
import "./About.css"
import Typewriter from "typewriter-effect"


const back = "./image/back.png"
const mern = './image/mern.png'
const back2 = "./image/back.jpg"
const frond = "./image/frond.jpg"

function About() {
    const image = [back,mern,back2,frond]
  return (
   <div className="about" id="About">
    <div className="container">
        <div className="common">
            <h1 className='about-title'>About me</h1>
            <div className="underline-border"></div>
        </div>
        <div className="row h-650 alignCenter">
            <div className="col-6">
                <div className="slidepanal">
                    <div className="about__img">
                        {image.map(images => { return ( <img src={images} alt="ima" className='imge3'  /> )})}
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="about__info">
                    <h1>I'm a  <Typewriter  onInit={(typewriter) => {
                        
                        typewriter
                            .typeString("Frondend Devloper")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Backend Devloper")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(" MERN Stack Devloper")
                            .start();
                            
                    }
                }
                /> </h1>
                    <div className="about__info">
                        <p> A programmer is someone who writes/creates computer software or applications generally by providing instructions (commonly through the use of a specific programming language) to the computer or by configuring already existing code (such as a framework or existing code base).Most programmers have extensive computing and coding experience in many varieties of programming languages and platforms
                        </p>
                        <div className= "about__button">
                            <a href="#about" className='btn btn-outline'>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>

  )
}

export default About