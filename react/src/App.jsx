import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'
import { ClipboardPlusIcon } from 'lucide-react';

function App() {
  // STATES
  const [tasks, setTasks] = useState(
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

  /**
   * funcao pra criar um evento de click que muda o estado da variavel isCompleted
   * e essa funcao sera carregado como um props em Tasks.jsx
   */
  function onTaskClick(taskId){
    const newTask = tasks.map(task => {
      // 
      if(task.id == taskId){
        return{...task, isCompleted: !task.isCompleted}
      }

      return task;
    });

    setTasks(newTask);

  }

  /**
   * 
   */
  function onDeleteTaskClick(taskId){
    const newTask = tasks.filter(task => task.id != taskId);

    setTasks(newTask);

  }

  return (
    // DIV PRINCIPAL DA APP
    <div className='w-screen h-screen bg-slate-700 flex justify-center p-8'>
      <div className='w-[500px] space-y-4'>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <button className="bg-slate-500 text-white p-2 rounded-md">
            <ClipboardPlusIcon />
        </button>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        <AddTask />
      </div>
    </div>
  )
}

export default App
