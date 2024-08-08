import React, { useEffect, useRef } from 'react';
import TEXT2 from "../assets/images/text2.png";
import LEADERS1 from "../assets/images/leader1.png";
import LEADERS2 from "../assets/images/leader2.png";
import LEADERS3 from "../assets/images/leader3.png";
import LEADERS4 from "../assets/images/leader4.png";
import LEADERS5 from "../assets/images/leader5.png";

export default function Second({ isActive }) {
  const textRef = useRef(null);
  const leader1Ref = useRef(null);
  const leader2Ref = useRef(null);
  const leader3Ref = useRef(null);
  const leader4Ref = useRef(null);
  const leader5Ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      textRef.current.classList.add('animated', 'zoomIn', 'd-6');
      leader1Ref.current.classList.add('animated', 'fadeInUp', 'd-2');
      leader2Ref.current.classList.add('animated', 'fadeInUp', 'd-4');
      leader3Ref.current.classList.add('animated', 'fadeInUp', 'd-6');
      leader4Ref.current.classList.add('animated', 'fadeInUp', 'd-8');
      leader5Ref.current.classList.add('animated', 'fadeInUp', 'd-10');
    } else {
      textRef.current.classList.remove('animated', 'zoomIn', 'd-6');
      leader1Ref.current.classList.remove('animated', 'fadeInUp', 'd-2');
      leader2Ref.current.classList.remove('animated', 'fadeInUp', 'd-4');
      leader3Ref.current.classList.remove('animated', 'fadeInUp', 'd-6');
      leader4Ref.current.classList.remove('animated', 'fadeInUp', 'd-8');
      leader5Ref.current.classList.remove('animated', 'fadeInUp', 'd-10');
    }
  }, [isActive]);

  return (
    <>
      <div className="screen screen-2">
        <div className="box">
          <div ref={textRef} className="screen-2-text-1">
            <img src={TEXT2} alt="" />
          </div>
          <div className="screen-3-text-2" style={{ paddingLeft: 0 }}>
            <img ref={leader1Ref} src={LEADERS1} alt="" className="leader1" />
            <img ref={leader2Ref} src={LEADERS2} alt="" className="leader2" />
            <img ref={leader3Ref} src={LEADERS3} alt="" className="leader3" />
            <img ref={leader4Ref} src={LEADERS4} alt="" className="leader4" />
            <img ref={leader5Ref} src={LEADERS5} alt="" className="leader5" />
          </div>
        </div>
      </div>
    </>
  );
}
