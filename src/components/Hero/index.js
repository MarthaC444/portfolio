import React from "react";
import "./styles.css";

function Hero(props) {
  return (
    <div className="container-fluid hero-img">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg align-items-center gx-5 py-5 header-color-gradient-small header-color-gradient-large">
          <div className="col-lg-6">
            <h1 className="lh-2 mb-3 text-uppercase">
              <span className="fs-3">Jr. Front End Developer | React.js</span>
              <br />
              <span className="text-gradient display-2 lh-1 fw-bold">
                Martha Chamberlain
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
