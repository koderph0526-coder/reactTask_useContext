import { useToDos } from "../context/ToDoContex";
import styles from "./ToDoCard.module.css";

export default function ToDoCard() {
  const { toDos, toggleToDo, deleteToDo } = useToDos();

  return (
    <>
      <ul className="postItGrid">
        {toDos.map((todo) => (
          <div className="postItGrid">
            <li key={todo.id}>
              <span
                onClick={() => toggleToDo(todo.id)}
                className={`styles.toDoItem.${todo.completed ? "completed" : ""}`}
              >
                {todo.text}
              </span>
              <input type="checkbox" />
              <button onClick={() => deleteToDo(todo.id)}>❌</button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
