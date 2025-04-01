import React from "react";
import {
  AiOutlineMobile,
  AiOutlineWifi,
  AiOutlineSetting,
  AiOutlineCloudUpload,
  AiOutlineLock,
  AiOutlineBgColors,
} from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./Landing.css";
import animationData from "./lottie.json";
import background from "./bg.json";
import Lottie from "lottie-react";
import Wave from "./wave.json";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-md navbar-dark fixed-top sticky-navigation">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-sm"></span>
        </button>
        <a className="navbar-brand" href="#">
          Talent Trove
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <a className="nav-link page-scroll" href="#main">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link page-scroll" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link page-scroll" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link page-scroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link page-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <Link to={"/login"} className="btn btn-primary ml-2">
            Login
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <section className="bg-texture hero" id="main">
        <div className="container">
          <div className="row d-md-flex brand">
            <div className="col-md-6 hidden-sm-down wow fadeIn">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <div className="col-md-6 col-sm-12 text-white wow fadeIn">
              <h2 className="pt-4">
                Optimize Your Team's Performance with{" "}
                <b className="text-primary-light">Talent Trove</b>
              </h2>
              <p className="mt-5 fs-5">
                In today's fast-paced technology landscape, managing IT
                professional performance is crucial. Talent Trove helps predict
                performance levels and assess work-related stress, offering
                actionable insights to boost productivity and job satisfaction.
              </p>
              <p className="mt-5">
                <a
                  href="#features"
                  className="btn btn-primary mr-2 mb-2 page-scroll"
                >
                  Learn More
                </a>
                <Link to={"/login"} className="btn btn-white mb-2 page-scroll">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="bg-white"
        id="about"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="text-primary">About Us</h2>
              <p className="lead mt-4">
                Talent Trove is dedicated to transforming the way IT
                professionals manage their performance and stress levels. Our
                innovative platform leverages cutting-edge machine learning and
                data analytics to provide actionable insights for individuals
                and organizations alike. We are committed to enhancing
                productivity, well-being, and job satisfaction through our
                comprehensive performance management system.
              </p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              opacity: "10%",
            }}
          >
            <Lottie
              animationData={Wave}
              loop={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* <Lottie animationData={background} loop={true} /> */}

      {/* Features Section */}
      <section className="cta bg-primary text-white text-center" id="features">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
              <h2 className="text-primary">Key Features</h2>
              <p className="lead mt-4">
                Talent Trove offers a range of features to help you monitor and
                manage performance effectively.
              </p>
            </div>
          </div>
          <div className="row mt-5 text-center">
            {/* Features List */}
            {[
              {
                icon: <AiOutlineMobile className="w-8 h-8" />,
                title: "Performance Prediction",
                text: "Predict performance levels based on various indicators to proactively manage stress and productivity.",
              },
              {
                icon: <AiOutlineWifi className="w-8 h-8" />,
                title: "Real-time Monitoring",
                text: "Monitor work-related factors such as project charts, hours worked, and meetings attended in real-time.",
              },
              {
                icon: <AiOutlineSetting className="w-8 h-8" />,
                title: "Advanced Analytics",
                text: "Leverage machine learning to gain actionable insights and optimize team performance.",
              },
              {
                icon: <AiOutlineCloudUpload className="w-8 h-8" />,
                title: "Comprehensive Data Integration",
                text: "Integrate various data sources for a holistic view of performance and stress factors.",
              },
              {
                icon: <AiOutlineLock className="w-8 h-8" />,
                title: "Secure and Confidential",
                text: "Ensure that all performance data is securely stored and handled with utmost confidentiality.",
              },
              {
                icon: <AiOutlineBgColors className="w-8 h-8" />,
                title: "Customizable Dashboards",
                text: "Create customizable dashboards to view and analyze performance metrics tailored to your needs.",
              },
            ].map((feature, index) => (
              <div className="col-md-4 wow fadeIn" key={index}>
                <div className="card">
                  <Lottie
                    animationData={background}
                    loop={true}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div className="card-body">
                    <div className="icon-box">{feature.icon}</div>
                    <h6>{feature.title}</h6>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="bg-light"
        id="testimonials"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="text-primary">What Our Users Say</h2>
              <p className="lead mt-4">
                Hear from those who have experienced the benefits of Talent
                Trove.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            {/* Testimonials List */}
            {[
              {
                name: "John Doe",
                position: "IT Manager",
                text: "Talent Trove has transformed the way we manage our team’s performance. The insights provided have been invaluable for our HR decisions.",
              },
              {
                name: "Jane Smith",
                position: "Software Developer",
                text: "I’ve found Talent Trove to be a game-changer for monitoring my own performance and stress levels. Highly recommended!",
              },
              {
                name: "Alex Johnson",
                position: "Project Lead",
                text: "The predictive analytics and real-time monitoring features of Talent Trove have greatly enhanced our team’s productivity.",
              },
            ].map((testimonial, index) => (
              <div className="col-md-4 text-center wow fadeIn" key={index}>
                <blockquote className="blockquote">
                  <p className="mb-4">{testimonial.text}</p>
                  <footer className="blockquote-footer">
                    {testimonial.name}{" "}
                    <cite title="Source Title">- {testimonial.position}</cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            opacity: "10%",
          }}
        >
          <Lottie
            animationData={Wave}
            loop={true}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-4">
            Ready to Transform Your Performance Management?
          </h2>
          <p className="lead mb-4">
            Join Talent Trove today and start optimizing your team’s performance
            and well-being.
          </p>

          <Link to={"/login"} className="btn btn-light btn-lg">
            Get Started
          </Link>
        </div>
      </section>

      <section className="bg-texture-collage p-0" id="contact">
        <div className="container">
          <div className="row d-md-flex text-white text-center wow fadeIn">
            <div className="col-sm-4 p-5">
              <p>
                <em className="ion-ios-telephone-outline icon-md"></em>
              </p>
              <p className="lead">+91 9876543210</p>
            </div>
            <div className="col-sm-4 p-5">
              <p>
                <em className="ion-ios-email-outline icon-md"></em>
              </p>
              <p className="lead">info@talenttrov.com</p>
            </div>
            <div className="col-sm-4 p-5">
              <p>
                <em className="ion-ios-location-outline icon-md"></em>
              </p>
              <p className="lead">Kannur, Kerala</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="bg-light" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 text-center">
              <h2 className="text-primary">Contact Us</h2>
              <p className="lead pt-3">
                Get in touch for more information about Talent Trove.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Landing;
