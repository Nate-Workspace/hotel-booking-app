import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/*The left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            Discover
            <br /> most suitable
            <br /> property!
          </div>
          <div className="flexColStart hero-disc">
            <span>Modern design hotels that suit your preferences.</span>
            <span>
              Escape all the dificulties in finding a resident for you
            </span>
          </div>
          <div className="search-bar">
            search bar 101
          </div>
        </div>

        {/* The right side*/}
        <div className="hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
