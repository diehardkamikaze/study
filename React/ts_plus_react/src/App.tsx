import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList'; 
 
 interface ITodo {
	title: string,
	id: number,
	completed: boolean,
 }
 
const App: React.FunctionComponent = () => {
	const [todos, setTodos] = useState<Array<ITodo>>([]);
	
	const removeHandler = (id: number) => {
		setTodos((prev) => prev.filter(todo => todo.id !== id));
	}
	
	const toggleHandler = (id: number) => {
		console.log(id);
		setTodos(prev => 
			prev.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
			}
			return todo;
		})
		)
	}
	
	const addHandler = (title: string) => {
		 const newTodo : ITodo = {
			title: title,
			id: Date.now(),
			completed: false,
		 }	
		// setTodos([newTodo, ...todos]);
		setTodos((prev) => [newTodo, ...prev]);
	}
	
	return (<>
		<NavBar />
		<div className="container">
			<TodoForm onAdd={addHandler} />
			<TodoList onToggle={toggleHandler} onRemove={removeHandler} todos={todos} />
		</div>
		</>);
}

export default App;
