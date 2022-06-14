import React, { useContext } from "react";
import { AppContext } from "../context";

export default function Square(props) {
  // useState direction (reverse)
  // useInterval : setInterval si reverse true retirer transition
  // si reverse false ajouter transition
  const context = useContext(AppContext);
  return (
    <div
      className="bg-yellow-300 h-80 shadow-xl rounded-xl duration-500 absolute"
      style={{ width: context.gameConfig.squareLength }}
    ></div>
  );
}
//transform :'translate('+props.translation[0]+'px,'+props.translation[1]+'px)'
