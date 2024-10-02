import React from 'react'
import defaultImage from '../assets/Banner.png'

const Cards = ({cardData}) => {
  
    if(!cardData.image) {
      return <div>Image not uploaded</div>
    }
  return (
    <>
    <div>
    <div className="card bg-white text-black w-100 md:w-96  shadow-xl dark:bg-black dark:text-white hover:scale-105 duration-300">
  <figure>
    <img
    className='h-90'
      src={cardData.image || defaultImage}
      alt="Book image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {cardData.name}
      <div className="badge badge-secondary">{cardData.category}</div>
    </h2>
    <p>{cardData.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{cardData.price}</div>
      <button className="badge badge-outline cursor-pointer">Buy</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards