import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='bg-yellow-400 transition-all duration-500 ease-in-out text-white px-4 py-2 rounded-full font-bold border border-yellow-400 hover:bg-white hover:text-yellow-400' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
