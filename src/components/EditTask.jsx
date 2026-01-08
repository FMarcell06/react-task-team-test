import React from 'react'
import { useState } from 'react'

export const EditTask = ({task,setTasks,setIsEditing}) => {
    const [text,setText] = useState("") 
    const [assignedTo,setAssignedTo] = useState("")
    
    const handleSave = (e) => {
        e.preventDefault()
        if(text!="" && assignedTo!=""){
            console.log(text); 
            const editedTask = {id:task.id,text,assignedTo}
            setTasks(prev=>prev.map(obj=>obj.id==task.id ?editedTask:obj))        }else {
        }
        setIsEditing(false)
        
    }
  return (
    <div>
        <form action="" onSubmit={handleSave}>
            <input type="text" placeholder={task.text} value={text} onChange={(e)=>setText(e.target.value)}/>
            <input type="text" placeholder={task.assignedTo} value={assignedTo} onChange={(e)=>setAssignedTo(e.target.value)}/>
            <button type='submit'>Mentés</button>
        </form>
    </div>
  )
}
