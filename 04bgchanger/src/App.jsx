import { useState } from 'react'


function App() {
  const [color, setColor] = useState('beige')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='flex justify-center px-2 text-white'>
        <button 
          className='outline-none px-4 py-1 mt-5 rounded-full text-lg font-semibold text-black shadow-lg' 
          style={{backgroundColor: 'beige'}}
          onClick={() => setColor('beige')}  
        >
          Reset
        </button>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl' style={{backgroundColor: 'beige'}}>
          <button onClick={() => setColor('rgb(220,38,38)')} className='w-20 h-10 bg-red-600 outline-none px-4 py-1 rounded-full text-white shadow-lg'></button>
          <button onClick={() => setColor('rgb(22,163,74)')} className='w-20 h-10 bg-green-600 outline-none px-4 py-1 rounded-full text-white shadow-lg'></button>
          <button onClick={() => setColor('rgb(37,99,235)')} className='w-20 h-10 bg-blue-600 outline-none px-4 py-1 rounded-full text-white shadow-lg'></button>
        </div>
      </div>
    </div>
  )
}

export default App
