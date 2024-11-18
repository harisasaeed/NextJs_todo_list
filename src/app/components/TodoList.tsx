
"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Add a new todo item
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  // Toggle the completed state of a todo item
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo item
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-gray-800 text-gray-200 py-4 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold font-serif">Todo List By Harisa</h1>
          <p className="mt-2 font-medium">
            Organize your work with our Next.js Todo List App
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-xl p-6">
          {/* Input Section */}
          <div className="mb-6">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
                placeholder="Add a new task..."
              />
              <button
                onClick={addTodo}
                className="px-6 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Add
              </button>
            </div>
          </div>

          {/* Todo List */}
          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                  todo.completed ? "bg-green-100 line-through" : "bg-blue-50"
                }`}
              >
                <span className="text-lg">{todo.text}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`px-4 py-2 rounded-lg text-white ${
                      todo.completed ? "bg-gray-400" : "bg-green-500"
                    } hover:bg-opacity-80 transition-all duration-150`}
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-150"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-4 text-center">
        <p className="text-sm">
          Under the Supervision of <span className="text-yellow-400">Harisa Saeed</span>
        </p>
        <p className="text-xs mt-1">&copy; {new Date().getFullYear()} My Todo App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TodoList;
