import React from 'react'
import { Link } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3> {task.text} <FaTimes onClick={onDelete} style={{ color:"red", cursor: "pointer" }} />  </h3>
        <p> {task.day} </p>
        <p> <Link to={`/task/${task.id}`}> View Details </Link> </p>
    </div>
  )
}

export default Task