import { todos } from '../../db.json';

export async function getTodos() {
  return await fetch('http://localhost:5000/todos')
    .then((response) => response.json())
    .then((data) => {
      console.log('Getting dynamic todos from the backend', data);
      return todos;
    });
}



// export function filterTodos(todos, tab) {
//   console.log('Filtering ' + todos.length + ' todos for "' + tab + '" tab.');

//   return todos.filter((todo) => {
//     if (tab === 'all') {
//       return true;
//     } else if (tab === 'active') {
//       return !todo.completed;
//     } else if (tab === 'completed') {
//       return todo.completed;
//     }
//   });
// }
