import { use, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./context/ToDoContex";
import ToDoForm from "./components/ToDoForm";
import ToDoCard from "./components/ToDoCard";
import ThemeToggleButton from "./components/ThemeToggle";

function App() {
  // I would like to add a little line at the topo of the screen that keeps thack of how many tasks are "active"(not finished)
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  //Can I also add a progress bar at some point?

  return (
    <>
      {/* <ThemeToggleButton /> */}
      <ToDoProvider>
        <h1>My ToDo List</h1>
        <ToDoForm />
        {/* Div for styling purposes */}
        <div className="postSpace">
          <ToDoCard className="postIt" />
        </div>
      </ToDoProvider>
    </>
  );
}

export default App;
