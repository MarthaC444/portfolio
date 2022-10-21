import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";


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
