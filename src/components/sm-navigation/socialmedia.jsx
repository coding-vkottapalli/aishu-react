import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/aishwaryapearala" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
