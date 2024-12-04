import { useState } from 'react'
import './App.css'

function App() {
  //let counter = 15
  const [counter, setCounter] = useState(15)
  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);
    setCounter(counter+1);
    if(counter >= 20)
      setCounter(counter)
  }
  const removeValue = () => {
    setCounter(counter-1);
    if(counter <= 0)
      setCounter(counter)
  }
  return (
    <>
     <h1>React course {counter}</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>{" "}
     <button
     onClick={removeValue}>Remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App