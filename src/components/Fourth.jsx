import React, { useEffect, useRef } from 'react';
import TEXT4 from "../assets/images/text4.png";
import MEN from "../assets/images/men.png";
import MEN2 from "../assets/images/men2.png";
import MEN3 from "../assets/images/men3.png";
import CIRCLE from "../assets/images/circle.png";
import HAND6 from "../assets/images/hand6.png";

export default function Fourth({ isActive }) {
  const textRef = useRef(null);
  const men1Ref = useRef(null);
  const men2Ref = useRef(null);
  const men3Ref = useRef(null);
  const circleRef = useRef(null);
  const hand6Ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      textRef.current.classList.add('animated', 'zoomIn', 'd-6');
      men1Ref.current.classList.add('animated', 'fadeInUp', 'd-2');
      men2Ref.current.classList.add('animated', 'fadeInUp', 'd-4');
      men3Ref.current.classList.add('animated', 'fadeInUp', 'd-6');
      hand6Ref.current.classList.add('animated', 'fadeInUp', 'd-4');
    } else {
      textRef.current.classList.remove('animated', 'zoomIn', 'd-6');
      men1Ref.current.classList.remove('animated', 'fadeInUp', 'd-2');
      men2Ref.current.classList.remove('animated', 'fadeInUp', 'd-4');
      men3Ref.current.classList.remove('animated', 'fadeInUp', 'd-6');
      hand6Ref.current.classList.remove('animated', 'fadeInUp', 'd-4');
    }
  }, [isActive]);

  return (
    <div className="screen screen-4">
      <div className="box">
        <div ref={textRef} className="screen-4-text-1">
          <img src={TEXT4} alt="Text" />
        </div>
        <div className="screen-3-text-2">
          <img ref={men1Ref} src={MEN} alt="Men1" className="men1" />
          <img ref={men2Ref} src={MEN2} alt="Men2" />
          <img ref={men3Ref} src={MEN3} alt="Men3" className="men3" />
        </div>
        <div className="screen-4-text-2">
          <img ref={circleRef} src={CIRCLE} alt="Circle" />
          <img ref={hand6Ref} src={HAND6} alt="Hand6" className="hand6" />
        </div>
      </div>
    </div>
  );
}
