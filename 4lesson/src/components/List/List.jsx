import { useEffect, useState } from 'react';
import { getTodos, getStaticTodos } from '../../utils/todos';

// Option 1 - we can import todos from "../../db.json";
const staticTodos = getStaticTodos();

function StaticList() {
  return (
    <ul>
      {staticTodos.map((item) => (
        <li key={item.id}>{item.done ? <s>{item.title}</s> : item.title}</li>
      ))}
    </ul>
  );
}

function DynamicList() {
  const [todos, setTodos] = useState([]);

  // Option 2 - we can use json-server and fetch todos from the backend
  // Look at package.json scripts - we have run `yarn server` in another terminal
  // It will be started in http://localhost:5000
  useEffect(() => {
    getTodos().then(setTodos).catch(console.error)
  }, [])

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.done ? <s>{item.title}</s> : item.title}</li>
      ))}
    </ul>
  );
}

export default DynamicList;
