import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
  bin: Todo[];
}

const initialState: TodoState = {
  items: [],
  bin: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        return;
      }
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },

    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.items.find((t) => t.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoToDelete = state.items.find((t) => t.id === action.payload);

      if (todoToDelete) {
        // remove from todos
        state.items = state.items.filter((t) => t.id !== action.payload);

        // add to bin
        state.bin.push({
          id: todoToDelete.id,
          text: todoToDelete.text,
          completed: todoToDelete.completed,
        });
      }
    },
    restoreTodo: (state, action: PayloadAction<string>) => {
      const todoToRestore = state.bin.find((t) => t.id === action.payload);

      if (todoToRestore) {
        // remove from bin
        state.bin = state.bin.filter((t) => t.id !== action.payload);

        // add back to todos
        state.items.push({
          id: todoToRestore.id,
          text: todoToRestore.text,
          completed: todoToRestore.completed,
        });
      }
    },
    permanentlyDeleteTodo: (state, action: PayloadAction<string>) => {
      state.bin = state.bin.filter((t) => t.id !== action.payload);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  restoreTodo,
  permanentlyDeleteTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
