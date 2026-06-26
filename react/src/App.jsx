import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  // STATES
  const [tasks, sendTasks] = useState(
    [
      {
        id: 1,
        title: "Estudar Django.",
        description: "Estudando pra usar no back-end do meu projeto de TCC.",
        dateCreation: "26/06/2026",
        deadline: "28/06/2026",
        isCompleted: false,
        isCompletedAt: "-/-/-"
      },

      {
        id: 2,
        title: "Estudar React.",
        description: "Estudando pra usar no front-end web do meu projeto de TCC.",
        dateCreation: "26/06/2026",
        deadline: "28/06/2026",
        isCompleted: false,
        isCompletedAt: "-/-/-"
      },

      {
        id: 3,
        title: "Estudar React Native.",
        description: "Estudando pra usar no front-end mobile do meu projeto de TCC.",
        dateCreation: "26/06/2026",
        deadline: "28/06/2026",
        isCompleted: false,
        isCompletedAt: "-/-/-"
      }
    ]
  );

  return (
    // DIV PRINCIPAL DA APP
    <div className='w-screen h-screen bg-slate-700 flex justify-center p-6'>
      <div className='pr-8'>
        
      </div>

      <div>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
          </h1>
        <button>
          Adicionar Tarefa
        </button>
        
        <Tasks tasks={tasks}/>
        <AddTask />
      </div>
    </div>
  )
}

export default App
