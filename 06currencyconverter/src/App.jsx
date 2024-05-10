import { useState } from 'react'
import  {InputBox}  from './components/index'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('eur')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  console.log(currencyInfo[to])

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(0)
  }

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  return (

    <div className='w-full h-screen flex flex-wrap flex-col justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg)`}}>
      <div className='w-full max-w-md mx-auto text-center border border-gray-60 rounded-lg py-3 backdrop-blur-md bg-black/15'>
        <h1 className='text-white text-3xl font-semibold my-1'>Currency Changer</h1>
      </div>
      

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
                label='from'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
                label='to'
                amount={convertedAmount}
                amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button 
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              type='submit'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
