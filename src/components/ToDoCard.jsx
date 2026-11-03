import { useToDos } from "../context/ToDoContex";
import styles from "./ToDoCard.module.css";

export default function ToDoCard() {
  const { toDos, toggleToDo, deleteTask } = useToDos();

  return (
    <div>
      <ul className={styles.postItgrid}>
        {toDos.map((todo) => (
          <div>
            <li key={todo.id}>
              <span
                onClick={() => toggleToDo(todo.id)}
                className={todo.completed ? styles.completed : styles.toDoItem}
              >
                {todo.text}
              </span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleToDo(todo.id)}
              />
              <button onClick={() => deleteTask(todo.id)}>❌</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
