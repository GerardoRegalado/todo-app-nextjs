// --> Package imports
import React from 'react'
import { observer } from 'mobx-react-lite';

// --> Local imports
import TodoStore from '../store/store';
import styles from '../page.module.css'

const TaskCard = ({ task, index } : { task: Task, index: number }) => {
      
    /**
     * * Removes a task item from the todoStore based on the index provided.
     * @param index as number.
     */
    const handleRemoveTask = (index: number): void => {
        TodoStore.removeTask(index);
      };

    /**
     * * Toggles the done status of a task item in the todoStore
     */
    const handleToggleDone = (): void => {
      TodoStore.toggleDone(index)
    }
    
  return (
    <>
        <input 
          type="checkbox" 
          checked = {task.done}
          onChange={handleToggleDone}
        />
        <span className={task.done? styles.done: ''}>{task.title}</span> 
        <button onClick={() => handleRemoveTask(index)}>Remove</button>
    </>
  )
}

export default observer(TaskCard)