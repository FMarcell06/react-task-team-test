import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTask } from './components/AddTask'
import { initialTasks } from '../data'
import { TaskList } from './components/TaskList'

function App() {
  const [tasks,setTasks] = useState(initialTasks)

  return (
    <>
      <h1>Feladatlista</h1>
      <AddTask setTask={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
