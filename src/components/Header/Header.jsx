import React from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="" width={100}></img>
        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Values </a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">Contacts</button>
        </div>
      </div>
      <div className="menu-icon">
        <BiMenuAltRight />
      </div>
    </section>
  );
};

export default Header;
