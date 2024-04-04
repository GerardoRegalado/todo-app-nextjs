"use client"
import React from 'react'
import TodoStore from '../store/store'
import { observer } from 'mobx-react-lite';


const Header = () => {

  const loadDummyData = async () => {
      const response = await fetch('/dummydata.json')
      const dummytasks: Task[] = await response.json();
      dummytasks.forEach( task => {
        TodoStore.addTask(task.title)
      })
    
  }
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-secondary">
        <div className="container-fluid">
          <h1 className="navbar-brand mb-0 h1 text-light">TO-DO App</h1>
          <button onClick={loadDummyData} className="btn btn-outline-secondary btn-sm">Load Dummy Data</button>
        </div>
      </nav>
    </>
  )
}

export default observer(Header)