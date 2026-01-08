import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({tasks,setTasks}) => {
    console.log(tasks);
    
  return (
    <div>
        <ul>
        {tasks.map(obj=>(
            <TaskItem key={obj.id} task={obj} setTasks={setTasks}/>
        ))
        }
        </ul>
    </div>
  )
}