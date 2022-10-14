import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Services from "../Services";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";


function Home(props) {
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default Home;
