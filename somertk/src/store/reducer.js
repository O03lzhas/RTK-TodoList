import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;
