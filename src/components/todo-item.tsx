import { h, Component } from 'preact';

export default class TodoItem extends Component<any, any> {
	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	shouldComponentUpdate({ todo, onRemove }:any) {
		return todo !== this.props.todo || onRemove !== this.props.onRemove;
	}

	render({ todo }:any) {
		return (
			<li>
				<button onClick={this.remove}>×</button>
				{ ' ' + todo.text }
			</li>
		);
	}
}
