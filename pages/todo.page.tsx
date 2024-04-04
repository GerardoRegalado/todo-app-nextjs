"use client" // --> Importart: this means that this is a client component and not a server component.

// --> Package Imports
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

// --> Local Imports
import TodoStore from '@/app/store/store';
import TaskCard from '@/app/components/TaskCard';
import styles from './../src/app/page.module.css'


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
      <section className={styles.todoList}>
        <div className={styles.headerContainer}>
          <h5 className={styles.headerText}>Todo List</h5>
        </div>
        <div className="input-group p-3">
          <span className="input-group-text" id="basic-addon1"> 
              <button onClick={handleAddTask} className={styles.addIcon}>
                <Image src="https://cdn.hugeicons.com/icons/add-circle-stroke-rounded.svg" alt="add-circle" width="24" height="24" />
              </button>
          </span>
          <input
            className="form-control"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
        </div>
        <div className={styles.taskList}>     
          <ul className={styles.ul}>
            {TodoStore.todos.length === 0 ? (<div className={styles.noTask}>No task added</div>) : TodoStore.todos.map((task, index) => (
              <>
                <li className={styles.li} key={index}>
                  <TaskCard 
                  task = {task}
                  index = {index}
                  />
                </li>
              </>

            ))}
          </ul> 
        </div>
      </section>
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
