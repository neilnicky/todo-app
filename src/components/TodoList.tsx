"use client";

import {
  deleteTodo,
  editTodo,
  toggleTodo,
} from "@/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import StatusBar from "./StatusBar";

export default function TodoList() {
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const todos = useAppSelector((state: RootState) => state.todo.items);
  const dispatch = useAppDispatch();

  const handleEditClick = (todoId: string, currentText: string) => {
    setEditId(todoId);
    setEditText(currentText);
  };

  const handleEditSubmit = (todoId: string) => {
    if (editText.trim() !== "") {
      dispatch(editTodo({ id: todoId, text: editText }));
    }
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="rounded-full flex-col ">
      <StatusBar />
      <div className="p-6 ">
        <ul className="max-w-xl mx-auto  ">
          {todos.map((todo, i) => (
            <li
              key={i}
              className={`flex justify-between items-center mb-2 p-2 border-b rounded-lg ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {editId === todo.id ? (
                <input
                  className="flex-1 mr-2 p-1 border rounded"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => handleEditSubmit(todo.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleEditSubmit(todo.id);
                    }
                  }}
                  autoFocus
                />
              ) : (
                <span
                  className="cursor-pointer flex-1"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.text}
                </span>
              )}
              <Pencil
                size={18}
                onClick={() => handleEditClick(todo.id, todo.text)}
                className="text-gray-300 ml-4 cursor-pointer"
              />

              <Trash2
                size={18}
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 ml-4 cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
