import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import "swiper/css";
import data from "../../utils/slider.json";
import { slidersettings } from "../../utils/common";
//import Swiper from "swiper";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...slidersettings}>
          <SliderButton />
          {/* this is a slider using the props slider settings to destruct the section based on this */}
          {data.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                {/* i gives unique key for each children */}
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondarytext r-price">
                    <span style={{ color: "orange" }}>$ </span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText r-title">{card.name}</span>
                  <span className="seocndaryText r-details">
                    {" "}
                    {card.detail}{" "}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-btn">
      {" "}
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
