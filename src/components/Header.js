import React, { useState, useEffect, useContext } from "react";
import { GameState } from "../constants";
import { AppContext } from "../context";

export default function Header(props) {
  const [seconds, setSeconds] = useState(0);
  const [timingDifference, setTimingDifference] = useState(0);
  const context = useContext(AppContext);

  useEffect(() => {
    let interval;

    if (context.gameState === GameState.ONGOING) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 0.01);
      }, 10);
    } else if (context.gameState === GameState.NOTSTARTED) {
      setSeconds(0);
      setTimingDifference(0);
    } else {
      setTimingDifference(
        Math.abs(
          seconds -
            (window.innerWidth / 2 + context.gameConfig.squareLength / 2) /
              context.gameConfig.speed
        )
      );
    }

    return () => {
      clearInterval(interval);
    };
  }, [context.gameState]); // N’exécute l’effet que si props.gameState a changé

  return (
    <header className="head bg-green-200">
      <div className="speed-square">
        <p>Speed : {context.gameConfig.speed} </p>
        <p>Square length : {context.gameConfig.squareLength} </p>
      </div>
      <div className="paused-difference">
        <p className="paused">Timer : {seconds.toFixed(2)} seconds</p>
        <p>Difference : {timingDifference.toFixed(2)} seconds </p>
      </div>
    </header>
  );
}
