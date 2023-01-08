import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="section footer-section">
        <div className="container">
          <div className="row footer-section">
            <div className="left-footer">
              <div className="about">
                <h3>ABOUT US</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  facere laudantium magnam voluptatum autem. Amet aliquid
                  nesciunt veritatis aliquam.
                </p>
              </div>
              <div className="footer-links">
                <h3>FEATURES</h3>
                <ul>
                  <li>
                    <a href="#about"> About Us </a>
                  </li>
                  <li>
                    <a href="#home"> Press Releases </a>
                  </li>
                  <li>
                    <a href="#testimonial"> Testimonials </a>
                  </li>
                  <li>
                    <a href="#service"> Terms of Service </a>
                  </li>
                  <li>
                    <a href="#home"> Privacy </a>
                  </li>
                  <li>
                    <a href="#contact"> Contact Us </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-footer">
              <div className="newsletter">
                <h3>SUBSCRIBE TO NEWSLETTER</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter Email" />
                  <button type="submit" className="btn">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="footer-icon-section">
                <h3>FOLLOW US</h3>
                <div className="footer-icon">
                  <a href="#">
                    <FaFacebookF className="team-icon" />
                  </a>
                  <a href="#">
                    <FaInstagram className="team-icon" />
                  </a>
                  <a href="#">
                    <FaTwitter className="team-icon" />
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="team-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="last-div">
            <p>
              Copyright ©2022 All rights reserved | This template is made with
              <span>
                <FaHeart />
              </span>
              by Burhan.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
