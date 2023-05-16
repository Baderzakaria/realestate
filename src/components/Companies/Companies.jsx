import React from "react";
import "./Companies.css";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="flexCenter innerWidth paddings c-container">
        <div className="c-image">
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
