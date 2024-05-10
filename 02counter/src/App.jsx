import { useState } from "react"


function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 0

const addValue = () => {
  if(counter < 100)
  setCounter(counter + 1)
}

const subValue = () => {
  if(counter > 0)
  setCounter(counter - 1)
}

  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button
        onClick={addValue}
      >Add value</button> {" "}
      <button
        onClick={subValue}
      >Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
