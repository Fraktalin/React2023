import { useState } from "react";
import List from "./components/List/List";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const handleChange = (event) => {
    setIsDark(event.target.checked);
  };

  return (
    <>
      <br />
      <label>
        <input type="checkbox" checked={isDark} onChange={handleChange} />
        Dark mode
      </label>
      <hr />
      <List />
    </>
  );
}
