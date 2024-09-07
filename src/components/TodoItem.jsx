/* eslint-disable react/prop-types */
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-2 bg-1st rounded-md shadow-sm mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-2 h-4 w-4 accent-blue-500 text-5th"
        />
        <span
          className={`${
            todo.completed ? "line-through text-5th opacity-80" : ""
          } text-lg text-5th`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition-colors duration-200 ml-2"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
