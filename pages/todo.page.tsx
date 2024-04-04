"use client" // --> Importart: this means that this is a client component and not a server component.

// --> Package Imports
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite';

// --> Local Imports
import TodoStore from '@/app/store/store';
import TaskCard from '@/app/components/TaskCard';


const TodoApp = () => {

    const [newTask, setNewTask] = useState(''); // --> Create a new state for todo task.


  /**
   * * it adds a new todo item to the TodoStore if the input is not empty
   */
    const handleAddTask = (): void => {
      if (newTask.trim()) {
        TodoStore.addTask(newTask);
        setNewTask('');
      }
    };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {TodoStore.todos.map((task, index) => (
          <li key={index}>
            <TaskCard 
            task = {task}
            index = {index}
            />
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
