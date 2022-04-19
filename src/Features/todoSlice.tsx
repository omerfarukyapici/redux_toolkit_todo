import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

        //Add todo 
        add: (state, action: PayloadAction<string>) => {
            const newTodo = {
                id: v4(),
                title: action.payload,
                completed: false
            }
            state.push(newTodo);
        },

        //Delete todo
        remove: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload)
        },

        //Complete todo
        toggleCompleted: (state, action: PayloadAction<string>) => {
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        }
    }
})

export default todoSlice.reducer;
export const { add, remove, toggleCompleted } = todoSlice.actions;
