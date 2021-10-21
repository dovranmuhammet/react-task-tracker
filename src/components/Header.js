import React from 'react'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({ title }) => {
  // console.log(props)
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Add' color='green' />
      <Tasks />
    </header>
  )
}

export default Header
