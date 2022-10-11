import React from "react";
import { calcLength, motion } from "framer-motion";
import { useState, useEffect } from "react";

import { BiCaretRightCircle, BiCaretDownCircle } from "react-icons/bi";
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

const About = () => {
  const [vopacity, setVOpacity] = useState(1);
  const [activeAccordian1, setActiveAccordian1] = useState(false);
  const [activeAccordian2, setActiveAccordian2] = useState(false);

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
      <div className="about__accordian-container">
        <div className="about__education about-accordian">
          <button className="about__accordian-btn">
            <BiCaretRightCircle
              className="about__accordian-inside-btn"
              style={{ opacity: vopacity }}
              onClick={() => {
                setActiveAccordian1(!activeAccordian1);
              }}
            />
          </button>

          {activeAccordian1 && (
            <button className="about__accordian-btn">
              <BiCaretDownCircle className="about__accordian-inside-btn" onClick={() => setActiveAccordian1(!activeAccordian1)} />
            </button>
          )}
          <h2>Education</h2>
          {activeAccordian1 && <p style={{ background: "rgba(255,255,255,0.2)" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, asperiores!</p>}
        </div>
        <div className="about__workexp about-accordian">
          <button className="about__accordian-btn">
            {" "}
            <BiCaretRightCircle className="about__accordian-inside-btn" onClick={() => setActiveAccordian2(!activeAccordian2)} />
          </button>
          <h2>Work Experience</h2>
          {activeAccordian2 && (
            <ul>
              <li>2011-2015 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, adipisci.</li>
              <li>2011-2015 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, adipisci.</li>
              <li>2011-2015 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, adipisci.</li>
              <li>2011-2015 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, adipisci.</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default AppWrap(About, "about");
