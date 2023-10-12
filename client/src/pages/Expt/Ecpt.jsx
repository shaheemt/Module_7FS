import React from 'react'
import {BsCheckSquareFill } from "react-icons/bs"
import "./Expt.css"

function Expt() {
  return (
   <div className="skill" id="Skill">
    <div className="container">
      <div className="head">
        <h5> What Skill I Have </h5>
        <h2>My Experience</h2> 
        <div className="underline"></div>
      </div>
        <div className="expreience-container">
            <div className="experience__frontend">
              <h3>Frontend Development</h3>
               <div className="experince__content">
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                      <h4>HTMl</h4>
                      <small className='text-align' >Experienced</small>
                    </div>
                  </article>
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                    <h4>JavaScript</h4>
                    <small className='text-align' >Experienced</small>
                    </div>
                  </article>
                   
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                     <div>
                       <h4>Bootstrap</h4>
                    <small className='text-align' >Experienced</small>
                     </div>
                  </article>
                  

                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                      <h4>React</h4>
                    <small className='text-align' >Experienced</small>
                    </div>
                  </article>
               </div>
            </div>
            <div className="experince__backend">
            <h3>Backend Development</h3>
               <div className= "experince__content">
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                    <h4>Node Js</h4>
                    <small className='text-align' >Experienced</small>
                    </div>
                  </article>
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                    <h4>Python</h4>
                    <small className='text-align' >Basic</small>
                    </div>
                  </article>
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                      <h4>MongoDB</h4>
                    <small className='text-align' >Experienced</small>
                    </div>
                  </article>
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                    <h4>MySQL</h4>
                    <small className='text-align' >Intermediate</small>
                    </div>
                  </article>
                  <article className="experince_details">
                    <BsCheckSquareFill className='icons'/>
                    <div>
                    <h4>PHP</h4>
                    <small className='text-align' >Basic</small>
                    </div>
                  </article>
               </div>

            </div>
        </div>
    </div>
   </div>
    
  )
}

export default Expt