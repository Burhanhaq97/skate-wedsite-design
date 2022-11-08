import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="logo">SKATER</h1>
        <nav>
          <ul>
            <li>
              <a href="#home" className="nav-link home-link">
                Home
              </a>
            </li>
            <li>
              <a href="#service" className="nav-link service-link">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link about-link">
                About
              </a>
            </li>
            <li>
              <a href="#testimonial" className="nav-link about-link">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#blog" className="nav-link blog-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link contact-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="section hero-section" id="home">
        <h1 className="header-heading">hi i'm john and i skate a lot</h1>
        <p className="section-pera">
          Lorem, ipsum dolor consecrator adipisicing elite. Est bandit's
          adipisicing!
        </p>
        <a href="#contact">
        <button className="btn btn-primary">
          Get in touch
        </button>
        </a>
      </section>
    </>
  );
};

export default Header;
