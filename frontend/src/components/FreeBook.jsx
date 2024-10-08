import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios'
const FreeBook = () => {
  

  const[book, setBook] = useState([])
  useEffect(()=> {
    const freeBookData = async() => {
      const res =await axios.get('http://localhost:4001/book')
     
      const data = res.data.filter((list) => list.category === "Free")
      setBook(data)
    }
    freeBookData()
  },[])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 mt-6">
      <div>
      <h1 className="font-semibold text-xl pb-2">Free offered Class</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit laudantium libero consectetur fugiat ratione architecto excepturi esse, assumenda, eos blanditiis aut alias vitae.</p>
      </div>
    <div>
    <div className="slider-container">
      <Slider {...settings}>
    {
      book.map((cardData) => {
        return (
          <Cards cardData={cardData} key={cardData.id} />
        )
      })
    }
      </Slider>
    </div>
    </div>
    </div>
    </>
  )
};

export default FreeBook;
