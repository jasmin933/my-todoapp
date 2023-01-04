import React, { useEffect, useState } from "react";
import "./Todo.css";
import AddTask from './AddTask';
import ListTask from './ListTask';
const Todo=()=>{
    const [tasks,setTasks]=useState([ ]);
    useEffect(()=>{
        document.title=`You have ${tasks.length} to do`;
    });

    const addTask = (title)=>{
        const  newTask= [...tasks,{title}];
        setTasks(newTask);
    }
    const removeTask=(index)=>{
        const newTask =[...tasks];
        newTask.splice(index,1);
        setTasks(newTask);


    }
    return <>
           <div className="container">
           <div className="header">TODO APP</div>
           <div className="todo"> <AddTask addTask={addTask} /></div>
           <div className="todotask">
            {tasks.map((tasks,index)=>(
               <ListTask  tasks={tasks} removeTask={removeTask} index={index}/>
            ))}
            </div>
           </div>
          </>
}
 
export default Todo;