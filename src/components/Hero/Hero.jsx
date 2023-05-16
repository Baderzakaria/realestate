import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
// import { HiLocationMarker } from "react-icons/hi";
//
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings flexCenter innerWidth hero-container ">
        {/*  the left side of the hero section */}
        <div className="flexColStart hero-left">
          <h1 className="hero-title">
            <div className="orange-circle" />
            Discover
            <br />
            most suitable
            <br />
            <p>properety🏡</p>
          </h1>
          <div className="flexColCenter hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              {" "}
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            {/* <HiLocationMarker color="var(--blue)" size="{25}" /> */}
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat ">
              <span>
                <CountUp start={2000} end={3000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">premium products 🌟</span>
            </div>
            <div className="flexColCenter  stat ">
              <span>
                <CountUp start={100} end={250} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Cutomers 🥰</span>
            </div>
            <div className="flexColCenter stat ">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">award wining 🏆</span>
            </div>
            <span></span>
          </div>
        </div>

        {/* the right side of the hero section */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="/hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
// Create a more organized codebase: The wrapper and container elements can be styled independently, which makes it easier to maintain the look and feel of the website.
// Control the layout of the section: The container element can be used to control the width and height of the section, as well as the alignment of the content.
// Make the section more accessible: The wrapper and container elements can be used to add semantic meaning to the section, which can make it more accessible to screen readers and other assistive technologies.
