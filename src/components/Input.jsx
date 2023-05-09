import React, { useState } from "react";
import {v4} from "uuid";
import Filter from "./Filter";

function Input({ setTodoState }) {
  const [todo, setTodo] = useState({ id:'' ,text: "", completed: false , editing:false});
  // console.log({todo})
  const handleTodo=()=>{
    if(!todo.text) return
    setTodoState((prev) => [...prev, {...todo, id:v4()}])
  }
  return (
    <div>
      <input
        type="text"
        value={todo.text}
        onChange={(e) => setTodo((prev) => ({ ...prev, text: e.target.value }))}
      />
      <button onClick={handleTodo}>
        Add
      </button>
      {/* <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          setTodo((prev) => ({ ...prev, completed: e.target.checked }));
        }}
      /> */}
      {/* <Filter todo={todo} setTodo={setTodo}/> */}
    </div>
  );
}

export default Input;
