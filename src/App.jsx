import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddTodos/>
    </div>
  )
}

export default App
