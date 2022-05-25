import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
	handleAddHabit = () => {
		const habit = document.querySelector(".add-input").value;
		this.props.onAdd(habit);
	};

	render() {
		const { habits, onIncrement, onDecrement, onDelete } = this.props;

		return (
			<section className="habits">
				<form className="add-form">
					<input placeholder="habit" className="add-input"></input>
					<button
						className="habit-add"
						onClick={this.handleAddHabit}
						type="button"
					>
						Add
					</button>
				</form>
				<ul>
					{habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							onDelete={onDelete}
						/>
					))}
				</ul>
				<button className="count-reset">Reset All</button>
			</section>
		);
	}
}
