import { useState } from 'react'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-xl bg-green-300'>React Router</h1> */}
      <Layout />
    </>
  )
}

export default App
