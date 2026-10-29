import { useToDos } from "../context/ToDoContex";
import styles from "./ToDoCard.module.css";

export default function ToDoCard() {
  const { toDos, toggleToDo, deleteToDo } = useToDos();

  return (
    <>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleToDo(todo.id)}
              className={`styles.toDoItem.${todo.completed ? "completed" : ""}`}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteToDo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
