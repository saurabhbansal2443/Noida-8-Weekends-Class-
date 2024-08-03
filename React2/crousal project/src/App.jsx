import React, { useState , useEffect } from "react";
import one from "./assets/one.jpeg";
import two from "./assets/two.jpeg";
import three from "./assets/three.jpeg";
import four from "./assets/four.jpeg";
import Circle from "./Circle";

const App = () => {
  let [data, setData] = useState([one, two, three, four]);
  let [index, setIndex] = useState(0);



  let handleLeft = () => {
    clearInterval(timerID);
    console.log(timerID);
    if (index == 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  let handleRight = () => {
    
      console.log(timerID);
    if (index == data.length - 1) {
      setIndex(pre =>  0 );
    } else {
      setIndex(pre => pre +1 );
    }
  };
  useEffect(() => {
    timerID = setInterval(() => {
      setIndex(pre =>{ 
      let res = ((pre+1) % (data.length) )  ;
      // console.log( res )
      return res ;
      } )
    }, 2000);
    return () => {
      clearInterval(timerID);
    }
  },[]);

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
          {" "}
          left{" "}
        </button>
        <img src={data[index]} style={{ height: "200px", width: "200px" }} />
        <button style={{ margin: "10px " }} onClick={handleRight}>
          {" "}
          Right{" "}
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {data.map((pic, idx) => (
          <Circle idx={idx} currIdx={index} setIdx={setIndex}></Circle>
        ))}
      </div>
    </>
  );
};

export default App;
