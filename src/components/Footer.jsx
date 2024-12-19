// src/components/Footer.js
import React from "react";
import yourImage from "../assets/images/vg.jpg"; // Adjust the path as per your folder structure


const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left Section - Logo */}
          <div className="d-flex align-items-center">
            <img
              src={yourImage}
              alt="Logo"
              style={{ height: "40px" }} // Adjust logo size
            />
            <span className="ms-2">VG Group of Company</span>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/vaibhav-goriya-353816278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-primary"
            >
              <i className="bi bi-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/Vaibhavgoriya"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-dark"
            >
              <i className="bi bi-github fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/vaibhav_patel__2004?igsh=ZGUzMzM3NWJiOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-danger"
            >
              <i className="bi bi-instagram fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Copyright Section */}
        <div className="text-center">
          <p>&copy; 2024 VG Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
