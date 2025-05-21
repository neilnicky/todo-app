"use client";

import {
  permanentlyDeleteTodo,
  restoreTodo,
} from "@/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { RotateCcw, X } from "lucide-react";

export default function Bin() {
  const binItems = useAppSelector((state: RootState) => state.todo.bin);
  const dispatch = useAppDispatch();

  return (
    <div className="border max-w-52 rounded-2xl px-4 py-2 h-fit">
      <p className="text-lg text-red-500 ">Bin</p>
      <ul>
        {binItems.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            <button
              onClick={() => dispatch(restoreTodo(item.id))}
              className="cursor-pointer"
            >
              <RotateCcw size={16} />
            </button>
            <span>{item.text}</span>
            <X
              size={16}
              onClick={() => dispatch(permanentlyDeleteTodo(item.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}


