// src/components/Contact.js
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "animate.css"; // Ensure Animate.css is imported for animation
import AOS from "aos"; // AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service and template IDs
    const serviceID = "service_89161lo"; // Replace with your EmailJS service ID
    const templateID = "template_ef8z0mc"; // Replace with your EmailJS template ID
    const userID = "Yt6MikJ3heus5U3x4"; // Replace with your EmailJS user ID

    // Prepare the data to be sent to EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      })
      .catch((error) => {
        alert("Error sending message. Please try again.");
      });
  };

  // Initialize AOS animation
  React.useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: false, // Trigger animation every time the section comes into view
      mirror: true, // Re-trigger animations on scrolling back
    });
  }, []);

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2
          className="text-center animate__animated animate__fadeIn animate__delay-1s"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <p
          className="text-center mb-5 animate__animated animate__fadeIn animate__delay-2s"
          data-aos="fade-up"
        >
          Get in Touch
        </p>
        <div className="row">
          {/* Left Column with contact details cards */}
          <div
            className="col-md-6 d-flex flex-column align-items-center justify-content-center"
            data-aos="fade-up"
          >
            <h3 className="text-center mb-4 animate__animated animate__zoomIn">
              Get in Touch
            </h3>

            {/* Email Card */}
            <div
              className="card mb-3 shadow-lg animate__animated animate__fadeInUp animate__delay-3s"
              style={{ maxWidth: "300px", marginBottom: "15px", width: "100%" }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-envelope fs-3 text-primary mb-3" />
                <div className="text-center">
                  <h5 className="card-title">Email</h5>
                  <a
                    href="mailto:vaibhavgoriya72@gmail.com"
                    className="card-text animate__animated animate__pulse animate__infinite"
                  >
                    vaibhavgoriya72@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div
              className="card mb-3 shadow-lg animate__animated animate__fadeInUp animate__delay-4s"
              style={{ maxWidth: "300px", marginBottom: "15px", width: "100%" }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-whatsapp fs-3 text-success mb-3" />
                <div className="text-center">
                  <h5 className="card-title">WhatsApp</h5>
                  <a href="tel:+917203872631" className="card-text">
                    +91 7203872631
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div
              className="card mb-3 shadow-lg animate__animated animate__fadeInUp animate__delay-5s"
              style={{ maxWidth: "300px", marginBottom: "15px", width: "100%" }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-geo-alt fs-3 text-warning mb-3" />
                <div className="text-center">
                  <h5 className="card-title">Address</h5>
                  <a
                    href="https://maps.app.goo.gl/q8qtP1g1peLZkUi67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-text"
                  >
                    "Sankalp" Block No.:276,Street 5/14,Alap Park,Ravapar Road,Morbi.
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with form */}
          <div className="col-md-6" data-aos="fade-up">
            <h3 className="text-center mb-4 animate__animated animate__fadeInUp">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control animate__animated animate__fadeInUp"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ padding: "12px", borderRadius: "8px" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control animate__animated animate__fadeInUp"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ padding: "12px", borderRadius: "8px" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control animate__animated animate__fadeInUp"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ padding: "12px", borderRadius: "8px" }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark w-40 animate__animated animate__fadeInUp"
                style={{ borderRadius: "8px" }}
              >
                Send Message
                <i className="bi mx-2 bi-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
