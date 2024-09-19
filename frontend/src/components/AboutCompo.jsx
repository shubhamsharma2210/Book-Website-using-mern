import React from "react";
import bookImAGE from '../assets/Banner.png'

const AboutCompo = () => {
  return <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex gap-4 md:gap-40 flex-col md:flex-row ">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">
              Thanks to Visit my website
              
            </h1>
            <p className="text-xl">
              Abhishek ojha s/o Raju ojha dolor sit amet consectetur adipisicing elit. Modi quas
              nesciunt laboriosam ea similique repellat impedit consequatur
              nihil eveniet, possimus quis molestiae voluptate dolorum pariatur
              nulla.
            </p>
           
          </div>
        
        </div>
        <div className="w-full md:w-1/2 mt-12 order-1 md:mt-32">
          <img className="w-92 h-92 bg-center" src={bookImAGE} alt="" />
    <div className="flex justify-center items-center mt-20">created by Shubham sharma copyright@2024 </div>
        </div>
  </div>;
}

export default AboutCompo;
