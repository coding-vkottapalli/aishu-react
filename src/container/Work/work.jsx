import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { SiSketchfab } from "react-icons/si";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./work.scss";

const categories = ["2D Art", "3D Stylized", "3D Reality", "All"];
const workData = [
  {
    title: "Chamaleon having Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "https://aishwaryapearala.blogspot.com/2022/08/chamaleon-having-coffee.html",
    codeLink: "https://sketchfab.com/models/e9bd68378b5f475a8c2cc17c18c40a03/embed",
    imgURL: images.chameleon,
    tags: ["3D Stylized", "All"],
  },
  {
    title: "Sloopy The Snail",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "https://aishwaryapearala.blogspot.com/2022/08/chamaleon-having-coffee.html",
    codeLink: "https://sketchfab.com/3d-models/sloopy-the-snail-765727579c7947cbaa5c52c9211850d8",
    imgURL: images.sloopy,
    tags: ["3D Stylized", "All"],
  },
  {
    title: "Childhood Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "https://aishwaryapearala.blogspot.com/2022/08/chamaleon-having-coffee.html",
    codeLink: "https://sketchfab.com/3d-models/childhood-adventure-0284b1b8e4f044de94021a36aa74054e",
    imgURL: images.childhood,
    tags: ["3D Stylized", "All"],
  },
  {
    title: "Fairy's House",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "https://aishwaryapearala.blogspot.com/2022/08/chamaleon-having-coffee.html",
    codeLink: "https://sketchfab.com/3d-models/fairy-house-8734490ed21e47aca057c5eaec4f2b71",
    imgURL: images.fairysHouse,
    tags: ["3D Stylized", "All"],
  },
  {
    title: "Chest Concept",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "https://aishwaryapearala.blogspot.com/2022/08/chamaleon-having-coffee.html",
    codeLink: "https://sketchfab.com/3d-models/chest-concept-0b24d89844c14509afbbf08c90d184d4",
    imgURL: images.chest,
    tags: ["3D Stylized", "All"],
  },
  {
    title: "Bear King",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.bear,
    tags: ["2D Art", "All"],
  },
  {
    title: "Benny",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.benny,
    tags: ["2D Art", "All"],
  },
  {
    title: "Bunny",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: null,
    codeLink: null,
    imgURL: images.bunny,
    tags: ["2D Art", "All"],
  },
  {
    title: "Child-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.child2,
    tags: ["2D Art", "All"],
  },
  {
    title: "Child-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.child3,
    tags: ["2D Art", "All"],
  },
  {
    title: "Child Potrait",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.childpotrait,
    tags: ["2D Art", "All"],
  },
  {
    title: "Dino",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.dino,
    tags: ["2D Art", "All"],
  },
  {
    title: "Mojo-Jojo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.mojojojo,
    tags: ["2D Art", "All"],
  },
  {
    title: "Mother-Daughter Potrait",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.motherpotrait,
    tags: ["2D Art", "All"],
  },
  {
    title: "Couple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.oldCouple,
    tags: ["2D Art", "All"],
  },
  {
    title: "Ruby",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.ruby,
    tags: ["2D Art", "All"],
  },
  {
    title: "Turtle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.turtle,
    tags: ["2D Art", "All"],
  },
  {
    title: "Laundry Basket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model01,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Table Lamp_02",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model02,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Table Lamp_03",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model03,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Trolly Stand",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model04,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Table Lamp_01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model05,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Tufted Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model06,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Authentic Chinese Vase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model07,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Gaming Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model08,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Soft Toy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model09,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Wall Clock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model10,
    tags: ["3D Reality", "All"],
  },
  {
    title: "Suitcase Drawer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi deleniti nemo omnis officia aliquid natus placeat dolorem rem saepe.",
    projectLink: "",
    codeLink: "",
    imgURL: images.model11,
    tags: ["3D Reality", "All"],
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(workData);
    setFilterWork(workData);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img
                src={work.imgURL}
                alt={work.name}
                style={{
                  backgroundColor: "#D3D3D3",
                }}
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                  onClick={() => console.log("Clicked")}
                >
                  <AiFillEye />
                </motion.div>

                {/* <a href={work?.projectLink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                    <AiFillEye />
                  </motion.div>
                </a> */}
                {work?.codeLink && (
                  <a href={work?.codeLink} target="_blank" rel="noreferrer">
                    <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                      <SiSketchfab />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
