import React, { Component } from "react";

export default class AddForm extends Component {
	inputRef = React.createRef();

	onAdd = (event) => {
		event.preventDefault();
		const name = this.inputRef.current.value;
		if (!name) return;
		this.props.onAdd(name);
		this.inputRef.current.value = "";
	};

	render() {
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
