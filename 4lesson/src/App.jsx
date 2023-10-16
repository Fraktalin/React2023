import { useState, useRef, forwardRef } from "react";
import List from "./components/List/List";
import AppInput from "./components/AppInput/AppInput";

export default function App() {
  const [isDark, setIsDark] = useState();
  const [todo, addNewTodo] = useState();
  let currentTheme = localStorage.getItem("currentTheme")
    ? JSON.parse(localStorage.getItem("currentTheme"))
    : { theme: false };

  const handleChange = (event) => {
    setIsDark(event.target.checked);
    event.target.checked
      ? localStorage.setItem("currentTheme", JSON.stringify(true))
      : localStorage.setItem("currentTheme", JSON.stringify(false));
  };
  console.log(currentTheme);
  const handleAddTodo = (value) => {
    addNewTodo(value);
  };

  return (
    <>
      <br />
      <label>
        <input
          type="checkbox"
          checked={currentTheme}
          onChange={handleChange}
        />
        Dark mode
      </label>
      <hr />
      <AppInput addNewTodo={handleAddTodo} />
      <List throwTodo={todo} theme={currentTheme ? "dark" : "light"} />
    </>
  );
}
