import { useState } from 'react'
import './App.css'

function App() {
  // STATES
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Ola Mundo!")

  return (
    <>
      <div>
        <h1>{message}</h1>
      </div>
      <div className="card">
        <button onClick={() => setMessage("Quebrei a Maldicao!")}>
          Mudar Mensagem
        </button>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
