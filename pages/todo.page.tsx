"use client" // --> Importart: this means that this is a client component and not a server component

import React, { useState } from 'react'
import TodoStore from '@/app/store/store';

export default function TodoApp() {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
      if (newTodo.trim()) {
        TodoStore.addTodo(newTodo);
        setNewTodo('');
      }
    };
  
    const handleRemoveTodo = (index: number) => {
      TodoStore.removeTodo(index);
    };
  return (
    <div>todo.page</div>
  )
}


/**
 * ! Topics for studying:
 * ?    "use client": how it is working in a deeper way and how works the server component
 */
