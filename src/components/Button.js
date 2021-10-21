import React from 'react'

const Button = ({ text, color }) => {
  const taskChange = (e) => {
    console.log('Clicked')
  }

  return (
    <button
      onClick={taskChange}
      className='btn'
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  )
}

export default Button
