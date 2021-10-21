import React from 'react'
import './App.css'
import Header from './components/Header'

/* const App = () => {
  const name = 'Dovran'
  const x = true
  return (
    <div className='App'>
      <h1>
        Hi {name} {1 + 1}
      </h1>
      <h2>{x ? 'Yes' : 'No'}</h2> 
    </div>
  )
}

export default App */

const App = () => {
  return (
    <div className='container'>
      <Header title='Task trucker' />
    </div>
  )
}

export default App
