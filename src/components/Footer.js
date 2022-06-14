import React, { useEffect, useState, useContext } from "react";
import { GameState } from "../constants";
import { AppContext } from "../context";
import ResultButton from "./ResultButton";

export default function Footer(props) {
  const [value, setValue] = useState();
  const context = useContext(AppContext);

  useEffect(() => {
    switch (context.gameState) {
      case GameState.NOTSTARTED:
        setValue("PLAY");
        break;

      case GameState.ONGOING:
        setValue("PAUSE");
        break;

      case GameState.ENDED:
        setValue("ONCE AGAIN");
        break;

      default:
        setValue("PLAY");
        break;
    }
  }, [context.gameState]);

  const handleClick = () => {
    if (context.gameState === GameState.NOTSTARTED) {
      props.onGameStateChange(GameState.ONGOING);
    } else if (context.gameState === GameState.ONGOING) {
      props.onGameStateChange(GameState.ENDED);
    } else {
      props.onGameStateChange(GameState.NOTSTARTED);
    }
  };

  return (
    <footer className=" flex justify-center h-28 bg-green-200">
      <button
        className="text-xl h-15 bg-green-500 text-slate-100 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-700 shadow-lg m-4 p-6"
        onClick={handleClick}
      >
        {value}
      </button>
      <ResultButton onClick={handleClick} />
    </footer>
  );
}
