import React from "react";
import ScratchCard from "react-scratchcard-v2";
import IMGMask from "../assets/images/TrioCircle.png";
import IMG from "../assets/images/unmask.png";

const MyScratchCard = ({ onComplete }) => {
  return (
    <div>
      <ScratchCard
        width={300}
        height={300}
        image={IMG}  
        finishPercent={90}
        onComplete={onComplete}
      >
        <img src={IMGMask} style={{ display: 'block', width: '100%', height: '100%' }} alt="Revealed content" />
      </ScratchCard>
    </div>
  );
};

export default MyScratchCard;
