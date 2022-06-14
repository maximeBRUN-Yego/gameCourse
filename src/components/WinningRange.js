import React from "react";

export default function WinningRange(props) {
  return (
    <>
      <div
        className="absolute h-40 duration-500 border-l-4 border-yellow-200"
        style={{ left: props.intervalStart }}
      />
      <p
        className="absolute mx-auto order-3 text-black"
        style={{ left: props.intervalStart }}
      >
        WINNING INTERVALE
      </p>
      <div
        className="absolute h-40 duration-500 border-l-4 border-green-200"
        style={{ left: props.intervalEnd }}
      />
    </>
  );
} // transform :'translate('+props.translation[0]+'px,'+props.translation[1]+'px)'
