import React, { useEffect, useRef } from 'react';
import TEXT3 from "../assets/images/text3.png";
import HAND1 from "../assets/images/hand1.png";
import HAND2 from "../assets/images/hand2.png";
import HAND3 from "../assets/images/hand3.png";
import HAND4 from "../assets/images/hand4.png";
import HAND5 from "../assets/images/hand5.png";

export default function Third({ isActive }) {
  const textRef = useRef(null);
  const hand1Ref = useRef(null);
  const hand2Ref = useRef(null);
  const hand3Ref = useRef(null);
  const hand4Ref = useRef(null);
  const hand5Ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      textRef.current.classList.add('animated', 'zoomIn', 'd-4');
      hand1Ref.current.classList.add('animated', 'fadeInUp', 'd-2');
      hand2Ref.current.classList.add('animated', 'fadeInUp', 'd-4');
      hand3Ref.current.classList.add('animated', 'fadeInUp', 'd-6');
      hand4Ref.current.classList.add('animated', 'fadeInUp', 'd-8');
      hand5Ref.current.classList.add('animated', 'fadeInUp', 'd-10');
    } else {
      textRef.current.classList.remove('animated', 'zoomIn', 'd-4');
      hand1Ref.current.classList.remove('animated', 'fadeInUp', 'd-2');
      hand2Ref.current.classList.remove('animated', 'fadeInUp', 'd-4');
      hand3Ref.current.classList.remove('animated', 'fadeInUp', 'd-6');
      hand4Ref.current.classList.remove('animated', 'fadeInUp', 'd-8');
      hand5Ref.current.classList.remove('animated', 'fadeInUp', 'd-10');
    }
  }, [isActive]);

  return (
    <>
      <div className="screen screen-3">
        <div className="box">
          <div ref={textRef} className="screen-3-text-1">
            <img src={TEXT3} alt="" />
          </div>
          <div className="screen-3-text-2">
            <img ref={hand1Ref} src={HAND1} alt="" />
            <img ref={hand2Ref} src={HAND2} alt="" />
            <img ref={hand3Ref} src={HAND3} alt="" />
            <img ref={hand4Ref} src={HAND4} alt="" />
            <img ref={hand5Ref} src={HAND5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
