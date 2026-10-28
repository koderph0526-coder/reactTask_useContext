import { createContext, useState, useContext } from "react";

const ToDoContext = createContext();

//The provider Component
export function ToDoProvider({ children }) {
  const [toDos, setToDos] = useState([]);

  //context for adding a new toDo
  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(), //fix this to be proper date that i can display on the cards.
      text,
      completed: false,
    };
    setToDos((prevToDos) => [...prevToDos, newToDo]); //Ensuring the rerender doesn't overwrite/remove old toDo tasks
  };
  //Toggle for completed or non-completed, set to false(above) as default.
  const toggleToDo = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    );
  };
  //Making it possible to deleted a todo
  const deleteTask = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };
  return (
    <ToDoContext.Provider value={{ toDos, addToDo, toggleToDo, deleteTask }}>
      {children}
    </ToDoContext.Provider>
  );
}

//Creating a custom hook that also throws an error if one attempt to add an empty task?
export function useToDos() {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("UseToDos must be used within a ToDoProvider");
  }
  return context;
}
