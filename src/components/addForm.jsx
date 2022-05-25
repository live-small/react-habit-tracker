import React, { Component } from "react";

export default class AddForm extends Component {
	render() {
		return (
			<form className="add-form">
				<input placeholder="habit" className="add-input"></input>
				<button
					className="habit-add"
					onClick={this.props.onAddHabit}
					type="button"
				>
					Add
				</button>
			</form>
		);
	}
}
