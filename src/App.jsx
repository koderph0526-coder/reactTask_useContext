import { useState } from "react";
import "./App.css";
import { ToDoProvider } from "./context/ToDoContex";

function App() {
  return (
    <ToDoProvider>
      <h1>My ToDo List</h1>
      <div>
        {/* Div for styling purposes */}
        {/* <ToDoForm /> */}
        {/* <ToDoCard /> */}
      </div>
    </ToDoProvider>
  );
}

export default App;
