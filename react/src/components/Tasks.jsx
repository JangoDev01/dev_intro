import { ChevronRightIcon } from "lucide-react";

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
            <ul className="space-y-4 p-6 bg-slate-400 rounded-md shadow">
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <p className="w-full bg-slate-500 text-white p-2 rounded-md">{task.title}</p>
                        <button className="bg-slate-500 text-white p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default Tasks;