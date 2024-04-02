import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import Fade from "react-bootstrap/Fade";

function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const playAnimation = () => {
      setOpen(true);
    };

    if (document.readyState === "complete") {
      playAnimation();
    } else {
      window.addEventListener("load", playAnimation);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", playAnimation);
    }
  }, []);

  return (
    <>
      <Fade in={open}>
        <div>
          <Header />
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
          <ScrollToTop />
          <Footer />
        </div>
      </Fade>
    </>
  );
}

export default Home;
