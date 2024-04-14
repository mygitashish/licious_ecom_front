import React from "react";
import meatImage from "./about.png"; // Import your image file
import "./about.css";

function About() {
  return (
    <section className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content text-left px-5">
              <h6>About Us</h6>
              <h2>We Best Provide Meat</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutImgDiv">
              <img src={meatImage} alt="Meat" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
