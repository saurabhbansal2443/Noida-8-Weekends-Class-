import React, { useState } from "react";

const UsingFunction = () => {
  let [searchQuery, setSearchQuery] = useState("");
  let [taskArray, setTaskArray] = useState([]);

  let handleClick = () => {
    let taskObj = { id: Date.now(), task: searchQuery };
    setTaskArray([...taskArray, taskObj]);
    setSearchQuery("");
  };

  let handleDelete = (id) => {
    let data = taskArray.filter((taskObj) => taskObj.id != id);
    setTaskArray(data);
  };

  return (
    <div>
      <input
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
        value={searchQuery}
      ></input>
      <button onClick={handleClick}> Add </button>
      <div>
        <ul>
          {taskArray.map((taskObj) => (
            <li key={taskObj.id}>
              {" "}
              {taskObj.task}{" "}
              <button onClick={() => handleDelete(taskObj.id)}> Delete </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsingFunction;
