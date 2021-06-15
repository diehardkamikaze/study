import React from 'react'

 
 interface ITodo {
	title: string,
	id: number,
	completed: boolean,
 }

type TodoListProps = {
	todos: ITodo[],
	onRemove: (id: number) => void,
	onToggle: (id: number) => void, 
}
 

export const TodoList : React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
	console.log(todos);
	if(todos.length == 0)
	{
		return <p>Нет записей</p>
	}
	return (
		<ul>
		{todos.map((todo) => (
			<li key={todo.id}>
				<label>
					<input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
					<span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</span>
					<i onClick={() => onRemove(todo.id)} className="material-icons red-text">deleteee</i>
				</label>
			</li>))
		}
		</ul>
	);
}
