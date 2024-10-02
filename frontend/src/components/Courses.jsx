import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Courses = () => {
  const [book, setBook] = useState([])
  
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log("error in getBook components",error)
      }
    }
    getBook()
  },[])
  
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
          book.map((cardData) => (
            <Cards key={cardData.id} cardData={cardData} />
          ))
        }
       
      </div>
    </div>
    </>
  )
}

export default Courses