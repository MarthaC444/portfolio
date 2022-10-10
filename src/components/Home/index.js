import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Availability from "../Availablity";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";


function Home(props) {
  return (
    <>
    <Header />
    <Hero />
    <Availability />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default Home;
