import React from "react";
import { calcLength, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { images } from "../../constants";
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
    title: "3d Rendering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eum impedit nulla eos distinctio, laudantium quidem. Aliquam, perferendis doloremque aliquid quo laboriosam exercitationem dolorem suscipit.",
    imgURL: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
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
    </>
  );
};

export default About;
