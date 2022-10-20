import React from "react";
import { IoMdContact } from "react-icons/io";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="app__contact">Hello</div>
    </>
  );
};

export default AppWrap(Contact, "contact", "app__primarybg");
