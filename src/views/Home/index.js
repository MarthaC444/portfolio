import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Home;
