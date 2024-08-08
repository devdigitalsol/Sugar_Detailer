import {React, useEffect, useRef } from "react";




export default function Video(){

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

   return(
    <div classNameName="w-full h-screen flex items-center justify-center bg-black">
      <video ref={videoRef} controls classNameName="w-full h-auto">
        <source src="../assets/images/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
   )
}