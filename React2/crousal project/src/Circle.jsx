import React from "react";

const Circle = ({ idx, currIdx , setIdx}) => {
  return (
    <div
      onClick={() => {
        if(currIdx != idx) {
            setIdx(idx);
        }
      }}
      style={{
        borderRadius: "50%",
        border: "1px",
        backgroundColor: idx == currIdx ? "black" : "grey",
        height: "10px",
        width: "10px",
        margin: "2px",
      }}
    ></div>
  );
};

export default Circle;
