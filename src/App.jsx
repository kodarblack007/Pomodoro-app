import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Todo from './components/Todo'
import Toggle from './components/Toggle'
import Dashboard2 from './components/Dashboard2'

function App() {
  

  return (
    <>
      <div>
        <Signup />
        <Todo />
        <Toggle/>
        <Dashboard2 />
        
        
      </div>
    </>
  )
}

export default App
