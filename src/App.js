import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTools = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de introducción a React.js', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Llorar con la Tu pinche madre', completed: true},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList>
        {defaultTools.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}





export default App;
