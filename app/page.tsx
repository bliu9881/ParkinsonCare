"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">My Todos</h1>
            <button
              onClick={createTodo}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              + New Todo
            </button>
          </div>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                onClick={() => deleteTodo(todo.id)}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-200"
              >
                <span className="text-gray-700">{todo.content}</span>
                <span className="text-xs text-gray-500">Click to delete</span>
              </div>
            ))}
          </div>

          {todos.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No todos yet. Create your first todo!
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 rounded-md">
            <p className="text-blue-800 text-sm">
              🥳 App successfully hosted. Try creating a new todo.
            </p>
            <a
              href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
              className="text-blue-600 hover:text-blue-800 text-sm underline mt-2 inline-block"
            >
              Review next steps of this tutorial.
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
