import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputs from './components/Inputs'
function App() {
  const [count, setCount] = useState(0)
  const [currencyNames, setcurrencyNames] = useState(0)
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
    .then((res)=>res.json())
    .then((data)=>setcurrencyNames(data))
  }, [])
  // console.log(currencyNames);
  
  return (
    <>
      <div className="relative w-screen h-screen flex items-center justify-center  " id='converter'>
  
  <div className="absolute inset-0 bg-[url('/img/bg.webp')] bg-center bg-cover opacity-70"></div>

  
  <div className="relative z-10 px-4">
    {/* Currency Selector */}
    <Inputs currency={currencyNames} />
  </div>
</div>

    </>
  )
}

export default App
