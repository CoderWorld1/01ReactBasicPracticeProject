import { useState } from "react";
import './App.css'

export default function App() {
  let [counter, setCounter] = useState(0)


  const addValue = () => {
    // console.log("Value Added")
    setCounter(counter + 1)
  }

  const decreaseVal = () => {
    setCounter(counter - 1)
  }

  const resetHandler = () => {
    setCounter(0)
  }


  return (
    <div>

      <h2>Counter Value  {counter}</h2>
      
      <button onClick={addValue}>Increment</button>&nbsp; &nbsp;
      
      <button onClick={decreaseVal}>Decrement</button>&nbsp;&nbsp;

      <button onClick={resetHandler}>Reset</button>
    </div>

  )
}



