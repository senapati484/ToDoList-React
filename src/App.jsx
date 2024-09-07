import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  // Initialize todos from local storage if available, else empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container max-w-sm mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4 text-5th">To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
      <h1 className="text-sm font-bold mt-4 text-1st hover:text-4th duration-300">
        Made By <a href="https://sayansenapati-1.web.app">Sayan Senapati</a>
      </h1>
    </div>
  );
};

export default App;
