import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "../assets/documents/Vaibhav.pdf"; // Import the resume file
import img from "../assets/images/Vaibhav12.jpg"

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Trigger animation every time the section comes into view
      mirror: true, // Re-trigger animations on scrolling back
    });
  }, []);

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center" data-aos="fade-up">
          About Me
        </h2>
        <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
          My Introduction
        </p>

        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 text-center">
            <img
              src={img}
              alt="Your Profile"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "75%" }}
              data-aos="fade-right"
            />
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            {/* Three Small Cards */}
            <div className="d-flex justify-content-between mb-4">
              <div
                className="card text-center shadow-sm"
                style={{ width: "30%", padding: "10px" }}
                data-aos="zoom-in"
              >
                <i className="bi bi-clock-history fs-1 text-primary mb-2"></i>
                <h5 className="card-title">1+ Years</h5>
                <p className="card-text">Experience</p>
              </div>
              <div
                className="card text-center shadow-sm"
                style={{ width: "30%", padding: "10px" }}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <i className="bi bi-briefcase fs-1 text-success mb-2"></i>
                <h5 className="card-title">5+ Projects</h5>
                <p className="card-text">Completed</p>
              </div>
              <div
                className="card text-center shadow-sm"
                style={{ width: "30%", padding: "10px" }}
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <i className="bi bi-people fs-1 text-warning mb-2"></i>
                <h5 className="card-title">2+ Clients</h5>
                <p className="card-text">Worldwide</p>
              </div>
            </div>

            {/* Summarized Lead Paragraph */}
            <p className="lead" data-aos="fade-up" data-aos-delay="600">
              I'm a dedicated Full Stack Developer with a passion for crafting
              modern, responsive, and user-friendly websites. I excel in React,
              Node.js, and database technologies, delivering impactful digital
              solutions.
            </p>

            {/* Download Resume Button */}
            <div className="mt-3" data-aos="fade-up" data-aos-delay="800">
              <a
                href={resume} // Use the imported resume path here
                download
                className="btn btn-dark w-40 btn-lg animate__animated animate__pulse animate__infinite"
              >
                Download Resume
                <i className="bi mx-2 bi-file-earmark-text"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;