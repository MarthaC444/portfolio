import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";

import Fade from "react-bootstrap/Fade";

function Home() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setOpen(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? <LoadingSpinner /> : null}
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
