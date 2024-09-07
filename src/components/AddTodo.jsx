/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-md mt-4"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new to-do"
        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none text-5th focus:border-blue-400"
      />
      <button
        type="submit"
        className="bg-[#a2a8b8] text-white px-4 py-2 rounded-r-md hover:bg-blue-400 transition-colors duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
