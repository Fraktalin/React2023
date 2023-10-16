import { useRef } from "react";
import Input from "./TaskInput";

const AppInput = (props) => {
  const ref = useRef(null);

  const handleAddItem = () => {
    //Спроба прокинути value до List.jsx але воно не реагує на клік по кнопці ADD
    // props.addNewTodo(ref.current.value);

    const newTodo = ref.current.value;
    if (newTodo.length >= 3) {
      const todoId = Date.now();
      fetch("http://localhost:5000/todos", {
        method: "POST",
        body: JSON.stringify({
          title: ref.current.value,
          id: todoId,
          done: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } else alert("minimum 3 symbols");
  };

  return (
    <div>
      <Input ref={ref} />
      <button onClick={handleAddItem}>ADD</button>
    </div>
  );
};

export default AppInput;
