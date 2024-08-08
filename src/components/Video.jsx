import {React, useEffect, useRef } from "react";
import ReactPlayer from 'react-player'
import video from '../assets/images/video.mp4';

function MyPlayer(){
return (
<div>
  <ReactPlayer controls={true} playing={true} muted={true} url={video} height={768} width={1024} />
</div>
);
}

export default MyPlayer;
