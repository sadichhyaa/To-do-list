import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditTodoForm } from "./EditTodo";

function Todo({ todoState, setTodoState, filterSelection = null }) {
  const handleChecked = (id) => {
    let array = [...todoState];
    let checkedTodo = array.find((todo) => todo.id === id);
    checkedTodo.completed = !checkedTodo.completed;
    // console.log([...array, checkedTodo]);
    setTodoState((prev) => [...array]);
  };
  let filteredTodos;
  if (filterSelection !== null) {
    filteredTodos = todoState.filter(
      (todo) => todo.completed === filterSelection
    );
  }

  const deleteTodo = (id) => {
    let array = [...todoState];
    let remainingArray = array.filter((todo) => todo.id !== id);
    setTodoState((prev) => [...remainingArray]);
    console.log(todoState);
  };

  const editTodo = (id) => {
    setTodoState(
      todoState.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  const editTask = (text, id) => {
    setTodoState(
      todoState.map((todo) =>
        todo.id === id ? { ...todo, text, editing: !todo.editing } : todo
      )
    );
  };
  

  return (
    <div>
      {filteredTodos &&
        filteredTodos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleChecked(todo.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTodo(todo.id)}
            />

            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => editTodo(todo.id)}
            ></FontAwesomeIcon>
            {todoState.map(
              (todo) =>
                todo.editing && <EditTodoForm editTodo={editTask} key={todo.id} task={todo} />
            )}
          </div>
        ))}

      {!filteredTodos &&
        todoState.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleChecked(todo.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTodo(todo.id)}
            />
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => editTodo(todo.id)}
            ></FontAwesomeIcon>
            {todoState.map(
              (todo) =>
                todo.editing && <EditTodoForm editTodo={editTask} task={todo} />
            )}
          </div>
        ))}
    </div>
  );
}

export default Todo;
