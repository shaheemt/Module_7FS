import React from 'react'
import Navbar from '../components/Navbar'
// import {Routes ,Route} from 'react-router-dom'
import Header from './Header/Header';
import About from './About/About'
import Expt from  './Expt/Ecpt'
import Contact from './Contact/Contact'


function Home() {
  return (
    <>
    <Navbar />
    <Header/>
    <About/>
    <Expt/>
    <Contact/>
    {/* <Routes>
      <Route path='/Contact' element={<Contact />} />
    </Routes> */}
    </>
   
  )
}

export default Home