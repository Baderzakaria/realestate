import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
      // setting the right to -the menu will this e};
    }
  };
  //these this is the hook that will be called to  handle the state of the menu buttons
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={100}></img>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Values </a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">Contacts</button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          {/* the onclick takes no function but it call the set function the flip the kind of prev whatever it is */}
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
