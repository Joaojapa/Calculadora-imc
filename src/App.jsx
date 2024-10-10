import { useState } from 'react'
import IMCCalculator from './components/calculadora'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <IMCCalculator/>
    </>
  )
}

export default App
