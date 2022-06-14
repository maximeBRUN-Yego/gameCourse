import React, { useContext, useEffect, useMemo } from "react";
import Dot from "./Dot";
import Square from "./Square";
import WinningRange from "./WinningRange";
import { AppContext } from "../context";
import { GameState } from "../constants";

export default function Body() {
  const context = useContext(AppContext);
  const intervalStart =
    window.innerWidth / 2 +
    context.gameConfig.squareLength / 2 -
    context.gameConfig.victoryRange;
  const intervalEnd =
    window.innerWidth / 2 +
    context.gameConfig.squareLength / 2 +
    context.gameConfig.victoryRange;

  useEffect(() => {
    if (context.gameState === GameState.ENDED) {
      if (context.dotPos < intervalStart || context.dotPos > intervalEnd) {
        context.levelNotCompleted();
      } else {
        context.completeLevel();
      }
    }
  }, [context.gameState]);

  const translation = useMemo(() => {
    if (context.gameState === GameState.ONGOING) {
      return [Math.random() * 250 - 125, Math.random() * 100];
    } else {
      return [0, 0];
    }
  }, [context.gameState]);

  // setTimeout(() => {translation = [0,0];}, Math.random()*1+1000)
  console.log(translation);

  return (
    <div className="body bg-green-100">
      <Dot />
      <Square
        style={{
          transform:
            "translate(" + translation[0] + "px," + translation[1] + "px)",
        }}
      />
      <WinningRange intervalStart={intervalStart} intervalEnd={intervalEnd} />
    </div>
  );
}
// translation={translation}
