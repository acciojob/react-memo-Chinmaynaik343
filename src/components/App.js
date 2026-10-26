
import React, { useState, useEffect, useMemo } from "react";
import UseMemo from "./UseMemo.js";
import ReactMemo from "./ReactMemo.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");

  useEffect(() => {
    // Runs when the todo list changes.
    document.title = `Tasks: ${todos.length}`;
  }, [todos]);

  const addTodo = () => {
    setTodos((previousTodos) => [...previousTodos, "New todo"]);
  };

  const addCustomTask = (event) => {
    event.preventDefault();

    if (task.trim().length <= 5) {
      alert("Task must be more than 5 characters");
      return;
    }

    setTodos((previousTodos) => [...previousTodos, task.trim()]);
    setTask("");
  };

  const totalCharacters = useMemo(() => {
    return todos.reduce((total, todo) => total + todo.length, 0);
  }, [todos]);

  return (
    <div className="app">
      <h1>Task Management App</h1>

      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount((previous) => previous + 1)}>
          Increment
        </button>
      </div>

      <div>
        <h2>Todo List</h2>
        <button onClick={addTodo}>Add Todo</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={`${index}-${todo}`}>
              {todo}
            </li>
          ))}
        </ul>

        <p>Total characters: {totalCharacters}</p>
      </div>

      <form onSubmit={addCustomTask}>
        <h2>Add Custom Task</h2>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task (minimum 6 characters)"
        />
        <button type="submit">Submit</button>
      </form>

      <UseMemo todos={todos} />
      <ReactMemo count={count} />
    </div>
  );
}

export default App;
