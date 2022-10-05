import React, { Fragment, useState } from "react";
import { images } from "../../constants";

import "./work.scss";

const skImg = "https://sketchfab.com/models/e9bd68378b5f475a8c2cc17c18c40a03/embed";
const imgs = [images.about01, images.about02, images.about03, images.about04, images.about01, images.about02, images.about03, images.about04];
const Work = () => {
  const [thumbnailSrc, setThumbnailSrc] = useState(images.about01);

  return (
    <Fragment>
      <div className="project">
        <div class="project-content  sketchfab-embed-wrapper">
          <iframe
            className="ifrm"
            title="Chamaleon having Coffee"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width="700"
            height="600"
            src="https://sketchfab.com/models/e9bd68378b5f475a8c2cc17c18c40a03/embed?autospin=1&autostart=1&dnt=1"
          ></iframe>
        </div>

        <div className="project-content container">
          <div className="thumbnail">
            <img src={thumbnailSrc} alt="" className="thumbnail-img" />
          </div>

          <div className="images-container">
            {imgs.map((img, index) => {
              return <img key={index} src={img} alt="alt-img" className="single-img" onClick={() => setThumbnailSrc(img)} />;
            })}
          </div>
        </div>
      </div>
      <div className="text-container">
        <h1>Chameleon</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias tenetur aliquam, minima beatae quia expedita quibusdam! Exercitationem cupiditate
          eum id animi beatae, voluptatem reprehenderit aliquid, similique ratione tempore voluptatibus ducimus!
        </p>
      </div>
    </Fragment>
  );
};

export default Work;
