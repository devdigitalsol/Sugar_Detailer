import {React, useEffect, useRef } from "react";




export default function Video(){

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

   return(
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video ref={videoRef} controls autoplay className="w-full h-auto">
        <source src="../assets/images/1.mp4" type="video/mp4" />
      </video>
    </div>
   )
}