import React, { useEffect, useRef, useState } from "react";
import MyScratchCard from "./Scratch";
import { useNavigate } from "react-router-dom";
import TEXT5 from "../assets/images/text5.png";
import ReactPlayer from 'react-player';
import video from '../assets/images/video.mp4';

export default function Fifth({ isActive }) {
  const navigate = useNavigate();
  const [scratchCompleted, setScratchCompleted] = useState(false);
  const textRef = useRef(null);
  const scratchCardRef = useRef(null);
  const videoRef = useRef(null);

  const onCompleteScratch = () => {
    setScratchCompleted(true);
    setTimeout(() => {
      navigate("/video");
    }, 1500);
  };

  useEffect(() => {
    if (isActive) {
      textRef.current.classList.add('animated', 'zoomIn', 'd-6');
      if (scratchCardRef.current) {
        scratchCardRef.current.initScratchCard();
      }
    } else {
      textRef.current.classList.remove('animated', 'zoomIn', 'd-6');
    }
  }, [isActive]);

  return (
    <div className="screen screen-5">
      <div className="box">
        {!scratchCompleted ? (
          <div className="screen-5-text-1" id="js--sc--container">
            <img
              ref={textRef}
              src={TEXT5}
              alt=""
              className="animated zoomIn d-6"
            />
            <div className="w-[100%] h-[100vh]">
              <div className="round">
                <MyScratchCard ref={scratchCardRef} onComplete={onCompleteScratch} />
                <h2
                  className="text-center round-text"
                  style={{
                    textAlign: "center",
                    paddingTop: "25px",
                    fontSize: "18px",
                  }}
                >
                  Please slide index fingers on the above circle. Life Acidity Free Life Acidity Free Life Acidity
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="video-container">
            <ReactPlayer
              ref={videoRef}
              controls={true}
              playing={true}
              muted={true}
              url={video}
              height="768px"
              width="1024px"
            />
          </div>
        )}
      </div>
    </div>
  );
}
