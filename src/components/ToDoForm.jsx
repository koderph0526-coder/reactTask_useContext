import { useState } from "react";
import { useToDos } from "../context/ToDoContex";
//  Testing something from a google search:

export default function ToDoForm() {
  const [input, setInput] = useState("");
  const { addToDo } = useToDos(); //Destucturing action form the global context

  const submitToDo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addToDo(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={submitToDo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task here..."
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
}
