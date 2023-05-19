import React from "react";
import "./Companies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { slidersettings } from "../../utils/common";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="innerWidth paddings c-container">
        <div className="flexColCenter c-image">
          <img src="equinix.png" />
          <img src="realty.png" />
          <img src="tower.png" />
          <img src="prologis.png" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
