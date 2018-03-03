import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import reduce from '../reducers';
import * as actions from '../actions';
import TodoItem from './todo-item';


@connect(reduce, actions)
export default class App extends Component<any, any> {
	render({ todos }:any, { text }:any):any {
		return (
			<div id="app">
				<form onSubmit={addTodos.bind(this)} action="javascript:">
					<input value={text} onInput={updateText.bind(this)} placeholder="New ToDo..." />
				</form>
				<ul>
					{ todos.map((todo:any) => (
						<TodoItem key={todo.id} todo={todo} onRemove={removeTodo.bind(this)} />
					)) }
				</ul>
			</div>
		);
	}
}

function addTodos(this:App){
	this.props.addTodo(this.state.text);
	this.setState({ text: '' });
};

function removeTodo(this:App, todo:any){
	this.props.removeTodo(todo);
};

function updateText(this:App, e:any){
	this.setState({ text: e.target.value });
};