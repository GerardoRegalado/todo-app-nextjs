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
    <div className={`card bg-dark border-bottom border-dark-subtle ${styles.cardContainer}`}>
      <div className="card-body text-white d-flex align-items-center justify-content-between">
        <div>
          <input 
            type="checkbox" 
            className='form-check-input me-2'
            checked = {task.done}
            onChange={handleToggleDone} />
          <span className={task.done? styles.done: ''}>{task.title}</span> 
        </div>
        <button
          className={`text-danger ${styles.remove}`}
          onClick={() => handleRemoveTask(index)}>
            Remove
        </button>
      </div>
    </div>
    </>
  )
}

export default observer(TaskCard)