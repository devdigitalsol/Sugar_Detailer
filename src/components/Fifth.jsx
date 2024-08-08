import React, { useState } from "react";
import MyScratchCard from "./Scratch";
import { useNavigate } from "react-router-dom";
import TEXT5 from "../assets/images/text5.png"
// import TEXT6 from "../assets/images/text6.png"

export default function Fifth() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");

  const onCompleteScratch = () => {
    setTimeout(() => {
      navigate("/video");
    }, 1000);
  };
    return(
      <>
        <div className="screen screen-5">
                <div className="box">
                <div className="screen-5-text-1" id="js--sc--container">
                    <img src={TEXT5} alt="" className="animated zoomIn d-6"/>
                    <div className="w-[100%] h-[100vh]">
      <div className="round">
        <MyScratchCard onComplete={onCompleteScratch} />
        <h2 className="text-center round-text"
        style={{
          textAlign: 'center',
          paddingTop: '25px',
          fontSize: '18px'
        }}
        >
          Please slide index fingers on the above circle Life Acidity Free Life
          Acidity Free Life Acidity{" "}
        </h2>
      </div>
    </div>
                </div>
                
                </div>
        </div>
       
      </>
      
    )
 }