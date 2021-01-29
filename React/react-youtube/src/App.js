import React from 'react'
import TodoList from './Todo/TodoList'



function App() {
  const todos = [{id: 1, completed: false, title: 'Купить хлеб'},
  {id: 2, completed: false, title: 'Съесть бананы'},
  {id: 3, completed: false, title: 'Выучить реакт уже'}]

  return (
   <div className='wrapper'>
     <h1>React tutorial</h1>
     <TodoList todos={todos}></TodoList>
   </div>
  );
}

export default App;
