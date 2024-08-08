import React from "react";
import ScratchCard from "react-scratchcard-v2";
import IMGMask from "../assets/images/TrioCircle.png"; 
import IMG from "../assets/images/unmask.png"; 

const MyScratchCard = ({ onComplete }) => {
  return (
    <div style={{ position: "relative", width: "257px", height: "257px" }}>
      <ScratchCard
        width={257}
        height={257}
        image={IMGMask} 
        finishPercent={90}
        onComplete={onComplete}
      >
        <img
          src={IMG}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          alt="Revealed content"
        />
      </ScratchCard>
    </div>
  );
};

export default MyScratchCard;
