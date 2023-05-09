import React from "react";

function Filter({ todoState, completed }) {
  return (
    <div>
      <div>
        {completed ? "showing completed todos" : "showing incomplete todos"}
      </div>
      {todoState
        .filter((todo) => todo.completed === completed)
        .map((filteredtodo) => (
          <div>{filteredtodo.text}</div>
        ))}
    </div>
  );
}

export default Filter;
