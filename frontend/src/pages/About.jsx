import React from 'react'
import { NavBar } from '../components/Navbar'
import AboutCompo from '../components/AboutCompo'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <NavBar />
      <div className='min-h-screen'>
        <AboutCompo />
      </div>
      <Footer />
    </div>
  )
}

export default About