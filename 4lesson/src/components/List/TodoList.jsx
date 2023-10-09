import { useMemo } from 'react';
import List from './List';

export default function TodoList({  theme, }) {

  return (
    <div className={theme}>
      <ul>
        <List  />
      </ul>
    </div>
  );
}