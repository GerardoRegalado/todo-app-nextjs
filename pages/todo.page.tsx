"use client" // --> Importart: this means that this is a client component and not a server component

import React, { useState } from 'react'
import { observer } from 'mobx-react-lite';
import TodoStore from '@/app/store/store';


const TodoApp = () => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
      if (newTodo.trim()) {
        TodoStore.addTodo(newTodo);
        setNewTodo('');
      }
    };
  
    const handleRemoveTodo = (index: number) => {
      TodoStore.removeTodo(index);
      setNewTodo('');
    };
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {TodoStore.todos.map((todo, index) => (
          <li key={index}>
            {index} - {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default observer(TodoApp);


/**
 * ! Topics for studying:
 * ?    "use client": how it is working in a deeper way
 * ?    "use server":  how works the use server?
 * ?     observer, how it is working and why we need to wrap the arrow function const with it?
 */
