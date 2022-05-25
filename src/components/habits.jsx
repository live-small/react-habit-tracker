import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
	state = {
		habits: [
			{ id: 1, name: "Reading", count: 0 },
			{ id: 2, name: "eating", count: 0 },
			{ id: 3, name: "studying", count: 0 },
		],
	};

	handleIncrement = (habit) => {
		// 리액트는 state를 직접 수정하면 안된다. -> 불변성을 유지해야함!! 안그러면 버그가 많이 생김..
		const habits = [...this.state.habits];
		const key = habits.indexOf(habit);
		habits[key].count++;
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const key = this.state.habits.indexOf(habit);
		const updateHabit = {
			...habit,
			count: habit.count - 1 < 0 ? 0 : habit.count - 1,
		};
		this.setState(this.state.habits.splice(key, 1, updateHabit));
	};

	handleDelete = (habit) => {
		const habits = [...this.state.habits];
		const key = habits.indexOf(habit);
		habits.splice(key, 1);
		this.setState({ habits });
	};

	render() {
		return (
			<section className="habits">
				<form className="add-form">
					<input placeholder="habit" className="add-input"></input>
					<button className="habit-add">Add</button>
				</form>
				<ul>
					{this.state.habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onDelete={this.handleDelete}
						/>
					))}
				</ul>
				<button className="count-reset">Reset All</button>
			</section>
		);
	}
}
