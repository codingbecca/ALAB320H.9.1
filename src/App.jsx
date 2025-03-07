import "./App.css";
import Todo from "./components/Todo";

import { useReducer, useState } from "react";
import reducer from "./todoReducer";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleClick = () => {
    const trimmedTodo = newTodo.trim();
    if (trimmedTodo) {
      dispatch({ type: "add_todo", payload: trimmedTodo });
      setNewTodo("");
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <div className="todos">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
}

export default App;
