import TEXT1 from "../assets/images/text1.png"
import IMG1 from "../assets/images/img1.png"
import { useEffect, useRef } from "react";

export default function First({isActive}) {

  const textRef = useRef(null);
  const imgRef = useRef(null);


  useEffect(() => {
    if (isActive) {
      textRef.current.classList.add('animated', 'zoomIn', 'd-6');
      imgRef.current.classList.add('animated', 'fadeInUp', 'd-2');
    } else {
      textRef.current.classList.remove('animated', 'zoomIn', 'd-6');
      imgRef.current.classList.remove('animated', 'fadeInUp', 'd-2');
    }
  }, [isActive]);

   return(
     <>
        <div className="screen screen-1">
        <div className="box">
          <div ref={textRef} className="screen-1-text-1">
            <img src={TEXT1} alt="" />
          </div>
          <div className="screen-3-text-2" style={{ paddingLeft: 0 }}>
            <img ref={imgRef} src={IMG1} alt="" className="leader1" />
          </div>
        </div>
      </div>
     </>
   )
}