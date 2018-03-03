
export function addTodo(text:string) {
	return {
		type: 'ADD_TODO',
		text
	};
}

export function removeTodo(todo:any) {
	return {
		type: 'REMOVE_TODO',
		todo
	};
}
