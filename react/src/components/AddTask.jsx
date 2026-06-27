function AddTask(){
    return(
        <div className="space-y-4 p-10 bg-slate-400 rounded-md shadow flex flex-col">
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite o Titulo da Tarefa" />
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Descreva a Tarefa" />
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="date" placeholder="Data de Entrega" />
            
            <button className="bg-slate-600 text-white p-2 rounded-md">Adicionar</button>
        </div>
    );
}

export default AddTask;