// import React, { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
//   AccordionItemState,
// } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import "./Value.css";
// import db from "../../../fireabse.config";

// const Value = () => {
//   const [accordions, setAccordions] = useState([]);

//   useEffect(() => {
//     const fetchaccordion = async () => {
//       const response = collection(db, "accordion");
//       const res = await getDocs(response);
//       const items = res.docs.map((doc) => doc.data());
//       setAccordions(items);
//     };

//     fetchaccordion();
//   }, []);

//   const handleAccordionChange = (index, expanded) => {
//     const updatedAccordions = accordions.map((item, i) => {
//       if (i === index) {
//         return {
//           ...item,
//           expanded,
//         };
//       }
//       return item;
//     });
//     setAccordions(updatedAccordions);
//   };

//   return (
//     <section className="v-wrapper">
//       <div className=" paddings innerWidth flexCenter v-container">
//         <div className="v-left">
//           {/* the left one that has an image container */}
//           <div className="image-container">
//             {" "}
//             <img src="./value.png" alt="" />
//           </div>
//         </div>
//         <div className="flexColStart v-right">
//           <span className="orangeText">Our Value</span>
//           <span className="primaryText"> Values we give to you</span>
//           <span className="secondaryText">
//             we are always ready to help you improve and give the best serviec
//             <br />
//             we believe a good blace place to live can make your life better
//           </span>
//           {/* {loading && <p>loading...</p>} */}
//           <Accordion
//             className="accordion"
//             allowMultipleExpanded={false}
//             preExpanded={[0]}
//             // it consider uuid as id
//           >
//             {accordions.map((item, index) => {
//               console.log(item);
//               <AccordionItem
//                 className={`accordienItem ${
//                   item.expanded ? "expanded" : "collapsed"
//                 }`}
//                 key={index}
//                 uuid={index}
//               >
//                 <AccordionItemHeading>
//                   <AccordionItemButton className="flexCenter accordionButton">
//                     <AccordionItemState>
//                       {({ expanded }) => (
//                         <div>
//                           <div className="flexCenter icon">{item.icon}</div>
//                           <span className="primaryText">{item.heading}</span>
//                           <div className="flexCenter icon">
//                             <MdOutlineArrowDropDown size={20} />
//                           </div>
//                         </div>
//                       )}
//                     </AccordionItemState>
//                     <MdOutlineArrowDropDown size={20} />
//                   </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                   <p className="secondaryText">{item.detail}</p>
//                 </AccordionItemPanel>
//               </AccordionItem>;
//             })}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Value;

import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import db from "../../../fireabse.config";
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
const Value = () => {
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    const fetchaccordion = async () => {
      const response = collection(db, "accordion");
      const res = await getDocs(response);
      const items = res.docs.map((doc) => doc.data());
      setAccordions(items);
    };

    fetchaccordion();
  }, []);

  const handleAccordionChange = (index, expanded) => {
    const updatedAccordions = accordions.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          expanded,
        };
      }
      return item;
    });
    setAccordions(updatedAccordions);
  };
  const [className, setClassName] = useState(null);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          {/* the left one that has an image container */}
          <div className="image-container">
            {" "}
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText"> Values we give to you</span>
          <span className="secondaryText">
            we are always ready to help you improve and give the best serviec
            <br />
            we believe a good blace place to live can make your life better
          </span>
          {/* Rest of the component */}
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {accordions.map((item, index) => (
              <AccordionItem
                className={`accordienItem ${className}`}
                key={index}
                uuid={index}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                      }
                    </AccordionItemState>
                    <div className="flexCenter icon">
                      <MdAnalytics />
                    </div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
