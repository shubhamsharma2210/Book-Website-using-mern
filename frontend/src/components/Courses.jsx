import React from 'react'
import { NavBar } from './Navbar'
import data from '../data.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Courses = () => {
  console.log(data)
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here💕 </span></h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione cupiditate ut est nihil laborum, asperiores veritatis eum delectus voluptatem, esse eaque voluptate dolor sint ipsa tempore! Voluptas incidunt blanditiis dolore ullam facilis beatae maiores ab nam debitis aliquam! Accusamus neque laborum ut facilis libero sit dolorum enim eligendi laboriosam obcaecati!</p>
      <Link to={'/'}>  <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer hover:bg-pink-800 duration-300'>Back</button></Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-4'>
        {
          data.map((cardData) => (
            <Cards key={cardData.id} cardData={cardData} />
          ))
        }
       
      </div>
    </div>
    </>
  )
}

export default Courses