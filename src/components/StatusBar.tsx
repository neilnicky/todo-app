import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React from "react";

export default function StatusBar() {
  const todos = useAppSelector((state: RootState) => state.todo.items);
  const completedTodos = useAppSelector((state: RootState) =>
    state.todo.items.filter((t) => t.completed === true)
  );

  const total = todos.length;
  const completed = completedTodos.length;


  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-white py-4 px-8 rounded-tl-full rounded-tr-full md:w-[50%] mx-auto">
      <p className="text-black text-xl font-medium text-center">
        You&apos;re {progress}% done!
      </p>
      <div className="h-1 rounded-full bg-gray-200 w-full mx-auto">
        <div
          className="h-1 rounded-full bg-green-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
