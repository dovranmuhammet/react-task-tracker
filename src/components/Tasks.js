import React from 'react'

const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'February 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at school',
    day: 'February 13th at 3:45pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Go to the bed',
    day: 'Sleep at 10:00 Pm',
    reminder: 'false',
  },
]

const Tasks = () => {
  return (
    <div>
      {tasks.map((task) => (
        <li>
          {task.text}
          {task.day}
        </li>
      ))}
    </div>
  )
}

export default Tasks
