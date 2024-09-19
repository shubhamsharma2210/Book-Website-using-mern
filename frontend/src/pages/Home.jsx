import React from "react";
import { NavBar } from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBook from "../components/FreeBook";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
  );
};

export default Home;
