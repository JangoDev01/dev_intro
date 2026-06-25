import { useState } from 'react'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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

      <div className="card">
        <h1 className="text-slate-500 text-3xl">Gerenciador de Tarefas</h1>
        <Tasks />
        <AddTask />
      </div>
    </>
  )
}

export default App
