import React, { PureComponent } from "react";

export default class AddForm extends PureComponent {
	// pureComponent: props, state를 얕은비교과정을 거쳐(shouldComponentUpdate) 다를 때만, 다시 렌더링함
	// - 여긴 상태값을 props로 받지 않기에 리렌더링 될 가능성 없음
	inputRef = React.createRef();

	onAdd = (event) => {
		event.preventDefault();
		const name = this.inputRef.current.value;
		if (!name) return;
		this.props.onAdd(name);
		this.inputRef.current.value = "";
	};

	render() {
		console.log(`addForm`);
		return (
			<form className="add-form" onSubmit={this.onAdd}>
				<input
					ref={this.inputRef}
					placeholder="habit"
					className="add-input"
				></input>
				<button className="habit-add">Add</button>
			</form>
		);
	}
}
