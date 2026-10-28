import { useState } from "react";
import { useToDos } from "../context/ToDoContex";

export default function ToDoForm() {
  const [input, setInput] = useState("");
  const { addToDo } = useToDos; //Destucturing action form the gloabl context

  //  Testing something from a google search:
  const submitToDo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addToDo(input);
    setInput("");
  };

  return (
    <>
      <form>
        <input>
          type="text" value="{input}
          onChange={(e) => setInput(e.target.value)}
          placeholder:"Add your task here..."
        </input>
        <button type="submit">Add task</button>
      </form>
    </>
  );
}
