import React, { useMemo, useState, useContext } from "react";
import { GameState } from "../constants";
import { AppContext } from "../context";

export default function ResultButton(props) {
  const context = useContext(AppContext);
  const [resultDisplay, setResultDisplay] = useState();

  const displayParameter = useMemo(() => {
    if (context.gameState === GameState.ENDED && context.levelResult === true) {
      setResultDisplay("NEXT LEVEL");
      return "block";
    } else {
      return "none";
    }
  }, [context.gameState, context.levelResult]);

  return (
    <button
      className="text-xl h-15 bg-green-500 text-slate-100 rounded-lg shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-700 m-4 p-6"
      style={{ display: displayParameter }}
      onClick={props.onClick}
    >
      {resultDisplay}
    </button>
  );
}
