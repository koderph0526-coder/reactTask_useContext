import { useToDos } from "../context/ToDoContex";

export default function ToDoCard() {
  const { todos, toggleToDo, deleteToDo } = useToDos();

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => deleteToDo(todo.id)}></button>
        </li>
      ))}
    </>
  );
}
