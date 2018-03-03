import { createStore } from 'redux';

declare global{
	var devToolsExtension:any;
}

let ACTIONS:any = {
	ADD_TODO: ({ todos, ...state }:any, { text }:any) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	}),

	REMOVE_TODO: ({ todos, ...state }:any, { todo }:any) => ({
		todos: todos.filter( (i:any) => i!==todo ),
		...state
	})
};

const INITIAL = {
	todos: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);
