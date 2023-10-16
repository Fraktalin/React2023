import { useCallback } from "react";
import { useEffect, useState, useMemo } from "react";
import { getTodos } from "../../utils/todos";
import { Button } from "../Buttons/Button";

function DynamicList({theme,throwTodo,props}) {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  //Спроба прокинути value до List.jsx але воно не реагує на клік по кнопці ADD


  // const handleAddItem = useCallback(function handleAddItem () {
  //   const todoId = Date.now();
  //   fetch("http://localhost:5000/todos", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: throwTodo,
  //       id: todoId,
  //       done: false,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });

  // },[throwTodo]);


  const handleDeleteItem = useCallback(function handleDeleteItem (e) {
    setTodos(todos.filter((todo) => todo.id !== +e.target.id));
    fetch(`http://localhost:5000/todos/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },[todos]);

  }) ;
  return (
    <ul className={theme}>
      {todos.map((item) => (
        <li key={item.id}>
          {item.done ? <s>{item.title}</s> : item.title}{" "}
          <Button id={item.id} onClick={handleDeleteItem} title="delete" />
        </li>
      ))}
    </ul>
  );
}

export default DynamicList;
