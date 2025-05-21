"use client";

import { addTodo } from "@/lib/features/todos/todoSlice";
import { useAppDispatch } from "@/lib/hooks";
import { CirclePlus } from "lucide-react";
import React, { useState } from "react";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText("");
      }}
      className="flex justify-between max-w-2xl mx-auto my-4 p-6"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded-full p-2 flex-1 mr-2"
        placeholder="Add new task.."
      />
      <button className="font-bold text-2xl cursor-pointer">
        <CirclePlus />
      </button>
    </form>
  );
}
