// src/components/HeroSection.js
import React from "react";
import "animate.css"; // Ensure you have animate.css installed
import img from "../assets/images/Vaibhav11.jpg"
// import yourImage from "../assets/images/profile-removebg-preview.png"; // Adjust the path as per your folder structure


const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center g-5">
          {/* Left Column */}
          <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
            <h1
              className="display-3 fw-bold animate__animated animate__fadeIn"
              style={{
                fontSize: "4rem",
                animationDelay: "0.5s", // Delayed appearance
              }}
            >
              Hi, I'm Vaibhav Goriya
            </h1>
            <div
              className="d-flex align-items-center mt-3 animate__animated animate__fadeIn"
              style={{
                color: "white",
                animationDelay: "1s", // Appears after the name
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                  marginRight: "10px",
                }}
              ></div>
              <h2
                className="fw-light mb-0"
                style={{
                  fontSize: "1.5rem",
                  animationDelay: "1.25s", // Appears slightly after the line
                }}
              >
                Full Stack Developer
              </h2>
            </div>
            <p
              className="lead mt-4 animate__animated animate__fadeIn"
              style={{
                animationDelay: "1.5s", // Appears after the subtitle
              }}
            >
              A passionate web developer and designer focused on creating
              user-friendly and efficient websites.
            </p>
            <a
              href="#contact"
              className="btn btn-primary btn-lg animate__animated animate__zoomIn"
              style={{
                animationDelay: "2s", // Appears last
              }}
            >
              Say Hello
              <i className="bi mx-2 bi-send"></i>{" "}
              {/* Correct className for icon */}
            </a>
          </div>

          {/* Right Column */}
          <div
            className="col-md-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={img}
              // src={yourImage}
              alt="Vaibhav Goriya"
              className="img-fluid card rounded-circle animate__animated animate__fadeIn animate__delay-3s"
              style={{
                maxWidth: "80%",
                marginTop: "30px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;