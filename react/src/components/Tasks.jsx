import { ChevronRightIcon, SquarePenIcon, Trash2Icon, ClipboardPlusIcon } from "lucide-react";

function Tasks(props){
    /**
     * as props,nos ajudam a acessar componentes de outros lugares
     * 
     * no react, quando trabalhamos com listas, como no caso o "map", iterando cada elemento e 
     * renderizando, devemos passar uma key...
     * o react usa essa key internamente pra varias questoes, como perfonmance
     */
    console.log(props);
    return(
        
        <div>
            <ul className="space-y-4 p-10 bg-slate-400 rounded-md shadow">
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button onClick={() => props.onTaskClick(task.id)} 
                            className={`w-full bg-slate-500 text-white text-left p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                            {task.title}
                        </button>
                        <button className="bg-slate-500 text-white p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>
                        <button onClick={() => props.onDeleteTaskClick(task.id)}
                            className="bg-slate-500 text-white p-2 rounded-md">
                            <Trash2Icon />
                        </button>
                        <button className="bg-slate-500 text-white p-2 rounded-md">
                            <SquarePenIcon />
                        </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default Tasks;