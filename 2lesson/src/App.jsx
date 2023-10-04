import "./App.css";
import React, { useState } from "react";
import { Button } from "./components/Buttons/Button";
import { Form } from "./components/Form/Form";
import { Typography } from "./components/Typography/Typography";

const App = () => {
  let storageData = localStorage.getItem("counters")
    ? JSON.parse(localStorage.getItem("counters"))
    : { min: -2, max: 5 };
  let [counter = 0, setCounter] = useState();
  let [maxCount = +storageData.max, setMaxCounter] = useState();
  let [minCount = +storageData.min, setMinCounter] = useState();

  const handleIncrement = () => {
    setCounter(counter === maxCount ? counter : counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter === minCount ? counter : counter - 1);
  };
  const handleFormSetCounts = (value) => {
    localStorage.setItem("counters", JSON.stringify(value));
    setMaxCounter(+value.max);
    setMinCounter(+value.min);
  };

  return (
    <>
      <div className="counter-wrapper">
        <Button onClick={handleDecrement} disabled={counter === minCount} title='-' ></Button>
        <Typography>{counter}</Typography>
        <Button onClick={handleIncrement} disabled={counter === maxCount} title="+"></Button>
      </div>
      <Form SetCounts={handleFormSetCounts} showCounts={storageData}></Form>
    </>
  );
};

export default App;
