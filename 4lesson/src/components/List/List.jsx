// import { memo } from "react";
import { useState } from "react";
import { getTodos } from "../../utils/todos";

function List(items) {
  // let arr = [
  //   { title: "washing dishes", id: 0, done: true },
  //   { title: "wash", id: 1, done: true },
  //   { title: "cleaning", id: 2, done: false },
  //   { title: "cooking", id: 3, done: true },
  // ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.done ? <s>{item.title}</s> : item.title}</li>
      ))}
    </ul>
  );
}

getTodos().then(List);

export default List;
