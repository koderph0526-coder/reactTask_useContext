import { use, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./context/ToDoContex";
import ToDoForm from "./components/ToDoForm";
import ToDoCard from "./components/ToDoCard";

function App() {
  const [activeTaskCount, setActiveTaskCount] = useState(0);

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
