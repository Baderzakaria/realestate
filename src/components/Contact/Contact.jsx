import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="co-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            we are always ready to help you improve and give the best serviec
            <br />
            we believe a good blace place to live can make your life better
          </span>
          <div className="flexStart contactModes">
            <div className="flexColStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">+9616895876</span>
                  </div>
                </div>
                <div className="flexCenter button ">Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">+9616895876</span>
                  </div>
                </div>
                <div className="flexCenter button ">Call Now</div>
              </div>
            </div>
            {/* third mode */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">+9616895876</span>
                  </div>
                </div>
                <div className="flexCenter button ">Call Now</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+9616895876</span>
                  </div>
                </div>
                <div className="flexCenter button ">Message</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className=" image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
