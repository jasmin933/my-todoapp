import { useState } from "react";

const AddTask=({addTask})=>{
    const [value,setValues]=useState("");
    const AddItem=()=>{
        addTask(value);
        setValues("");

    }
    return<>
    <div>
    
    <input className="input" type="type" placeholder="Add tasks" value={value}  onChange={(e)=>{setValues(e.target.value)}}/>
    <button  onClick={AddItem}>+</button>
    </div>
    </>
}

export default AddTask;