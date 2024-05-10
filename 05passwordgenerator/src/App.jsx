import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  return (
    <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassword}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 pb-3 shadow-md'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={8}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name='range'
            id='range'
          />
          <label htmlFor='range'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            value={length}
            className='cursor-pointer'
            name='numbers'
            id='numbers'
          />
          <label htmlFor='numbers'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className='cursor-pointer'
            name='chars'
            id='chars'
          />
          <label htmlFor='chars'>Characters</label>
        </div>
        
      </div>
      <p className='text-yellow-100 text-2xl mt-28 opacity-80 font-light'>PASSWORD COPIED TO CLIPBOARD</p>
    </div>
  )
}

export default App
