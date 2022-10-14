import React from "react";
import Image from "react-bootstrap/Image";
import Headshot from "../../assets/headshot.jpg";
import "./styles.css";

function Services(props) {
  return (
    <section className="container my-5 mx-auto">
      <h2 className="text-uppercase fw-bold text-center pb-3">What I do</h2>
      <div className="container row d-flex py-3 align-items-center">
        <div className="container d-flex justify-content-center col-sm-6">
          <Image
            src={Headshot}
            className="rounded-circle shadow"
            width="200"
          ></Image>
        </div>
        <p className="col-sm-6 py-3 change-alignment">
          I've focused on
          React.js but would love the opportunity to expand my experience into
          other frameworks. If you located in the Tri-City area of east Tennessee or have a remote position, I'd love to hear from you.
        </p>
      </div>
    </section>
  );
}

export default Services;
