export async function getTodos() {
  return await fetch("../../db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export function filterTodos(todos, tab) {
  console.log("Filtering " + todos.length + ' todos for "' + tab + '" tab.');

  return todos.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}
