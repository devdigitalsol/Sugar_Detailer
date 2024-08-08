import React, { useState } from "react";
import MyScratchCard from "./Scratch";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");

  const onCompleteScratch = () => {
    setTimeout(() => {
      navigate("/video");
    }, 1000);
  };

  return (
    <div className="w-[100%] h-[100vh]">
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <MyScratchCard onComplete={onCompleteScratch} />
        <h2 className="text-center">
          Please slide index fingers on the above circle Life Acidity Free Life
          Acidity Free Life Acidity{" "}
        </h2>
      </div>
    </div>
  );
}


