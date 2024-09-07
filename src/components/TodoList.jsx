/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="w-full max-w-md bg-2nd rounded-lg shadow-md mt-4 px-4 pt-4 pb-2">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 mb-2">
          No to-dos yet. Add one above!
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
