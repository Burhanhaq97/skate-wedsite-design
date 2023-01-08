import React, { useRef } from "react";
import sectionImg2 from "../assets/section-img2.webp";
import play from "../assets/play.webp";
import Skateboarder from "../assets/Skateboarder.mp4";

const Video = () => {
  let video = useRef(null);
  let img = useRef(null);
  let icon = useRef(null);

  const playVideo = () => {
    video.current.play();
    video.current.autoplay = true;
    video.current.controls = true;

    img.current.style.zIndex = "-1";
    icon.current.style.zIndex = "-1";
  };

  return (
    <>
      <section className="section section-video">
        <img className="video-tb" src={sectionImg2} loading="lazy" ref={img} />
        <video src={Skateboarder} ref={video} />
        <img
          onClick={playVideo}
          className="video-icon"
          src={play}
          loading="lazy"
          ref={icon}
        />
      </section>
    </>
  );
};

export default Video;
