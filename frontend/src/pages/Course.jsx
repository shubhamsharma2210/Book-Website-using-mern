import React from 'react'
import { NavBar } from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/Courses'

const Course = () => {
  return (
    <>
    <NavBar />
    <div className='min-h-screen'>
        <Courses />
    </div>
    <Footer />
    </>
  )
}

export default Course