import React from 'react'
import TodoStore from '../store/store';

function TaskCard(props: any) {
      
    const handleRemoveTodo = (index: number) => {
        TodoStore.removeTodo(index);
      };
  
  return (
    <div>
        <input type="checkbox" />
        {props.todo}
        <button onClick={() => handleRemoveTodo(props.index)}>Remove</button>
    </div>
  )
}

export default TaskCard