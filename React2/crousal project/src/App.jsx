import React, { useState, useEffect, useRef } from "react";
import one from "./assets/one.jpeg";
import two from "./assets/two.jpeg";
import three from "./assets/three.jpeg";
import four from "./assets/four.jpeg";
import Circle from "./Circle";

const App = () => {
  let [data, setData] = useState([one, two, three, four]);
  let [index, setIndex] = useState(0);
  let timerID = useRef(null);

  const resetTimer = () => {
    if (timerID.current) {
      clearInterval(timerID.current);
    }
    timerID.current = setInterval(() => {
      setIndex((pre) => {
        let res = (pre + 1) % data.length;
        return res;
      });
    }, 2000);
  };

  let handleLeft = () => {
    resetTimer();
    if (index == 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  let handleRight = () => {
    resetTimer();
    if (index == data.length - 1) {
      setIndex((pre) => 0);
    } else {
      setIndex((pre) => pre + 1);
    }
  };

  let handleMouseLeave = () => {
    console.log("handleMouseLeave")
    resetTimer();
  }
  let handleMouseOver = ()=>{
    console.log("handleMouseOver")
    if ( timerID.current){
      clearInterval(timerID.current);
     }
  }
  useEffect(() => {
    resetTimer();
    return () => {
     if ( timerID.current){
      clearInterval(timerID.current);
     }
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button style={{ margin: "10px " }} onClick={handleLeft}>
          left
        </button>
        <img
          src={data[index]}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          style={{
            height: "200px",
            width: "200px",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
        <button style={{ margin: "10px " }} onClick={handleRight}>
          Right
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px"
        }}
      >
        {data.map((pic, idx) => (
          <Circle key={idx} idx={idx} currIdx={index} setIdx={setIndex}></Circle>
        ))}
      </div>
    </>
  );
};

export default App;
