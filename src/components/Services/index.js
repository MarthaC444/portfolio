import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useSpring, animated } from "react-spring";
import Headshot from "../../assets/headshot.jpg";

import "./styles.css";

function Services(props) {
  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: 1,
      left: "-500px"
    }
  });

  function useIntersectionObserver(
    elementRef,
    { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
  ) {
    const [entry, setEntry] = useState();
  
    const frozen = entry?.isIntersecting && freezeOnceVisible;
  
    const updateEntry = ([entry]) => {
      setEntry(entry);
    };
  
    useEffect(() => {
      const node = elementRef?.current;
      const hasIOSupport = !!window.IntersectionObserver;
  
      if (!hasIOSupport || frozen || !node) return;
  
      const observerParams = { threshold, root, rootMargin };
      const observer = new IntersectionObserver(updateEntry, observerParams);
  
      observer.observe(node);
  
      return () => observer.disconnect();
    }, [elementRef, threshold, root, rootMargin, frozen]);
  
    return entry;
  }
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true 
  });
  return (
    <section id="whatImDoing" className="pt-5 pb-5">
      <Container className="my-5 mx-auto">
        <animated.h2 style={headerStyle} className="pb-3 text-uppercase fw-bold text-center">

          What I'm Doing
        </animated.h2>
        <Row className="d-flex py-3 flex-sm-column flex-md-row align-items-center">
          <Col sm={6} className="d-flex justify-content-center">
            <Image
              src={Headshot}
              className="rounded-circle shadow m-3"
              style={{ maxWidth: 350 }}
              // width="350"
            ></Image>
          </Col>
          <Col sm={12} md={6}>
            <p className="change-alignment md-text-start">
              I'm building personal projects with React.js, Next.js, and UI tools like React-Bootstrap and Material UI.
              I'm currently looking for an Apprenticeship or Entry level Jr.
              development role so if you're located in the Tri-City area of east
              Tennessee or have a remote position, I'd love to hear from you!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
