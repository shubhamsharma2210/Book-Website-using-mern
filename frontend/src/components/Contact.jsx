import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl flex  justify-center items-center container mx-auto md:px-20 px-4 pt-20">
      <div className=" w-[420px] h-[450px] shadow-2xl">
        <h1 className="text-2xl font-semibold ml-5">Contact Us</h1>
        <div className="border-b-2 dark:border-white border-slate-900 w-60 rounded-sm mt-2"></div>
        <div className="p-3">
          <form action="">
            <div className="flex flex-col mt-4">
              <label className="text-xl font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="px-1 py-2 border-b-[3px] dark:border-white  border-black  outline-none dark:bg-slate-900 bg-white dark:text-white text-black"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-xl font-semibold" htmlFor="email">
                Emial
              </label>
              <input
                className="px-1 py-2 border-b-[3px] dark:border-white  border-black  outline-none dark:bg-slate-900 bg-white dark:text-white text-black"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-xl font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                cols={5}
                rows={4}
                className="px-1 py-2 border-b-[3px] dark:border-white  border-black  outline-none dark:bg-slate-900 bg-white dark:text-white text-black"
                type="email"
                placeholder="Enter Your Message"
              />
            </div>
            <div className="mt-4 flex items-center justify-center">
              <button className="bg-pink-500 px-3 py-2 rounded-lg ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
