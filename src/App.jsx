import { use, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./context/ToDoContex";
import ToDoForm from "./components/ToDoForm";
import ToDoCard from "./components/ToDoCard";

function App() {
  // I would like to add a little line at the topo of the screen that keeps thack of how many tasks are "active"(not finished)
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  //Can I also add a progress bar at some point?

  return (
    <ToDoProvider>
      <h1>My ToDo List</h1>
      <div>
        {/* Div for styling purposes */}
        <ToDoForm />
        <ToDoCard />
      </div>
    </ToDoProvider>
  );
}

export default App;
