import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./about.scss";
const abouts = [
  {
    title: "3D Modeling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum impedit nulla eos distinctio, laudantium quidem. Aliquam, perferendis doloremque aliquid quo laboriosam exercitationem dolorem suscipit.",
    imgURL: images.about01,
  },
  {
    title: "3D Texturing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum impedit nulla eos distinctio, laudantium quidem. Aliquam, perferendis doloremque aliquid quo laboriosam exercitationem dolorem suscipit.",
    imgURL: images.about02,
  },
  {
    title: "3D Sculpting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum impedit nulla eos distinctio, laudantium quidem. Aliquam, perferendis doloremque aliquid quo laboriosam exercitationem dolorem suscipit.",
    imgURL: images.about03,
  },
  {
    title: "3D Lighting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum impedit nulla eos distinctio, laudantium quidem. Aliquam, perferendis doloremque aliquid quo laboriosam exercitationem dolorem suscipit.",
    imgURL: images.about04,
  },
  {
    title: "3D Rendering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum impedit nulla eos distinctio, laudantium quidem. Aliquam, perferendis doloremque aliquid quo laboriosam exercitationem dolorem suscipit.",
    imgURL: images.about04,
  },
];

const accrd = [
  {
    title: "Education",
    content: ["Indira Gandhi National Open University (IGNOU)  • Hyderabad, INDIA  •  2013", "Bachelor of Arts: 3D Animation And Visual Effects"],
  },
  {
    title: "Work Experience",
    content: [
      "Elorce Industries - Senior 3D Artist • Hyderabad, INDIA  •  11/2020 - 04/2021",
      "Amazon - Junior 3D Artist  •  Hyderabad, INDIA  •  07/2018 - 04/2020",
      "Cyient Ltd - Junior Graphic Technician • Hyderabad, INDIA  •  06/2016 - 06/2018  ",
    ],
  },
];

const About = () => {
  const [itemSelected, setItemSelected] = useState(null);

  const selectHandler = (item) => {
    if (itemSelected === item) {
      return setItemSelected(null);
    }
    return setItemSelected(item);
  };
  return (
    <>
      <h2 className="head-text" style={{ marginTop: 22, fontSize: 35 }}>
        <span>"</span>Art is not what you <span>see,</span> <br />
        but what you make others <span>see."</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="accordian__container-parent">
        {accrd.map((item, i) => (
          <div key={item + i} className="accordian__container-item">
            <div className="accordian__heading" onClick={() => selectHandler(i)}>
              <h2 className="accordian__heading-text">{item.title}</h2>
              <span className="accordian__heading-expand">{itemSelected === i ? "-" : "+"}</span>
            </div>

            <div className={`accordian__content`}>
              {item.content.map((itemContent, ind) => (
                <p key={ind} className={`accordian__content-text ${itemSelected === i ? "accordian__content-active" : ""}`}>
                  {itemContent}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
