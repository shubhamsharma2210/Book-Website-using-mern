import React from 'react'
import { NavBar } from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const ContactUs = () => {
  return (
    <div>
        <NavBar />
            <div className='min-h-screen'>
                <Contact />
            </div>
        
        <Footer />
        
    </div>
  )
}

export default ContactUs