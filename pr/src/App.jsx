import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter,setcounter] = useState(0);
  const [count, setCount] = useState(0)

  const incre = () => {
    setCount(count + 1);
  }
  const decre = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <div id="output">{count}</div>
      <div><button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button></div><br/>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
