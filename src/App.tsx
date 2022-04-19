import { useState } from "react";
import { add, remove, toggleCompleted } from "./Features/todoSlice";
import { useAppDispatch, useAppSelector } from "./Store";

//This is commit


const App = () => {

  const todos = useAppSelector(state => state.todos);

  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();


  //Save
  const onSave = () => {
    dispatch(add(title));
    setTitle("");

  }

  //Delete
  const onDelete = (id: string) => {
    dispatch(remove(id));
  }

  //Completed
  const toggle = (id: string) => {
    dispatch(toggleCompleted(id))
  }


  return (
    <>
      <input type="text" name="title" value={title} onChange={e => setTitle(e.currentTarget.value)} />
      <button onClick={onSave}>Save</button>

      <ul>
        {
  
        todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => toggle(todo.id)}>{todo.completed ? "Not completed" : "Completed"}</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        ))

        }
      </ul>
    </>
  );
}

export default App;
