import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiSec = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      numberOfPieces={150}
      gravity={0.01}
      width={width}
      height={height * 2}
    />
  );
};

export default ConfettiSec;
