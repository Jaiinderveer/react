import { useState } from 'react'
import './App.css'
import Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Jai',
    age: 19
  }
  let myArr = [1,2,3]
  return (
    <>
      <Card username="JaiAurCode" btnText ="Click me"/>
      <Card username="RubyAurCode"/>
    </>
  )
}

export default App
