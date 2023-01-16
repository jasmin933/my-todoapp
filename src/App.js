
import './App.css';
import Todoslist from './components/Todoslist';

import Header from './components/Header';
import Form from './components/Form';
import React, { useState } from 'react'

const App = () => {

  const [input,setInput]=useState("");
  const [todos,setTodos]= useState([]);
  const [editTodo,setEditTodo]=useState(null);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
         
        </div>
        <div>
        <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </div>
        <div>
          <Todoslist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
    
    
  )
}

export default App


