

const ListTask =({tasks,removeTask,index})=>{

    return  <>
            <div>
                {tasks.title}
                <button onClick={()=>removeTask(index)}>delete</button>
            </div>
    </>
} 

export default ListTask;