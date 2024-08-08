import {React, useEffect, useRef } from "react";
import ReactPlayer from 'react-player'
import video from '../assets/images/video.mp4';



function MyPlayer(){
return (
<div>
  {/* <video width="100%" height="100%" controls autoplay muted>
  <source src="{video}" type="video/mp4"/>
  </video> */}
  <ReactPlayer controls={true} playing={true} muted={true} url={video} height={768} width={1024} />
</div>
);
}

export default MyPlayer;

// export default function Video(){

//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//    return(
//     <div className="w-full h-screen flex items-center justify-center bg-black">
//       <video ref={videoRef} controls autoplay className="w-full h-auto">
//         <source src="../assets/images/1.mp4" type="video/mp4" />
//       </video>
//     </div>
//    )
// }