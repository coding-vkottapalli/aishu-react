import React, { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./skills.scss";

const data = [
  {
    bgColor: "green",
    icon: images.about01,
    name: "3d ARtist",
    year: "1992",
    company: "AMAZON",
    works: ["sdfgsdfgsdfgsdfgsdfg", "zdfgsdfgsdfgsdfgsfdg", "sfgsfdgsdfgsdfgsfdg", "sfgfgf"],
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eligendi hic minima nobis, doloremque tempora beatae necessitatibus aliquam quisquam. Delectus repellendus blanditiis cum ipsa dolorum.",
  },
  {
    bgColor: "green",
    icon: images.about01,
    name: "3sfdgdfzdgd ARtist",
    year: "1996",
    company: "AMAZON",
    works: ["sdfgsdfgsdfgsdfgsdfg", "zdfgsdfgsdfgsdfgsfdg", "sfgsfdgsdfgsdfgsfdg", "sfgfgf"],
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eligendi hic minima nobis, doloremque tempora beatae necessitatibus aliquam quisquam. Delectus repellendus blanditiis cum ipsa dolorum.",
  },
  {
    bgColor: "green",
    icon: images.about01,
    name: "3sf ggd ARtist",
    year: "1995",
    company: "AMAZON",
    works: ["sdfgsdfgsdfgsdfgsdfg", "zdfgsdfgsdfgsdfgsfdg", "sfgsfdgsdfgsdfgsfdg", "sfgfgf"],
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eligendi hic minima nobis, doloremque tempora beatae necessitatibus aliquam quisquam. Delectus repellendus blanditiis cum ipsa dolorum.",
  },
  {
    bgColor: "green",
    icon: images.about01,
    name: "3sfgd ARtist",
    year: "1994",
    company: "AMAZON",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eligendi hic minima nobis, doloremque tempora beatae necessitatibus aliquam quisquam. Delectus repellendus blanditiis cum ipsa dolorum.",
    works: ["sdfgsdfgsdfgsdfgsdfg", "zdfgsdfgsdfgsdfgsfdg", "sfgsfdgsdfgsdfgsfdg", "sfgfgf"],
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(data);
    setSkills(data);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex" key={skill.name}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, i) => (
                  <Fragment key={i}>
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work" data-tip data-for={work.name}>
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip id={work.name} effect="solid" arrowColor="#fff" className="skills-tooltip">
                      {work.desc}
                    </ReactTooltip>
                  </Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
