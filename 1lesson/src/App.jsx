import "./App.css";
import { Button } from "./components/buttons/mainButton";
import { Input } from "./components/inputs/mainInput";

const App = () => {
  const sayHello = () => {
    alert(`hello`)
  }
  const printInConsole = (e)=> {
    console.log(e.target.value);
  }
  return (
    <>
      <Button title="click"></Button>
      <Button onClick={sayHello} title="me"></Button>
      <Input onChange={printInConsole}></Input>
    </>
  );
};

export default App;
