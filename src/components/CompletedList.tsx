"use client";

import { toggleTodo } from "@/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React from "react";

export default function CompletedList() {
  const completedTodos = useAppSelector((state: RootState) =>
    state.todo.items.filter((item) => item.completed === true)
  );

  const dispatch = useAppDispatch();

  return (
    <div className="border max-w-52 rounded-2xl px-4 py-2 h-fit">
      <p className="text-lg text-blue-500">Completed Tasks</p>
      <ul>
        {completedTodos.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <span onClick={() => dispatch(toggleTodo(item.id))}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
