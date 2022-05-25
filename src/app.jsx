import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navbar";

import React, { Component } from "react";

export default class App extends Component {
	state = {
		habits: [
			{ id: 1, name: "Reading", count: 0 },
			{ id: 2, name: "eating", count: 0 },
			{ id: 3, name: "studying", count: 0 },
		],
	};

	handleIncrement = (habit) => {
		// 리액트는 state를 직접 수정하면 안된다. -> 불변성을 유지해야함!! 그 이유는, 성능과 관련있음
		const habits = [...this.state.habits];
		const key = habits.indexOf(habit);
		habits[key].count++;
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const habits = [...this.state.habits];
		const key = habits.indexOf(habit);
		const updateHabit = {
			...habit,
			count: habit.count - 1 < 0 ? 0 : habit.count - 1,
		};
		habits.splice(key, 1, updateHabit);
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		const habits = [...this.state.habits];
		const key = habits.indexOf(habit);
		habits.splice(key, 1);
		this.setState({ habits });
	};

	handleAdd = (name) => {
		const habits = [
			...this.state.habits,
			{ id: Date.now(), name, count: 0 },
		];
		this.setState({ habits });
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => ({
			...habit,
			count: 0,
		}));
		this.setState({ habits });
	};

	render() {
		console.log(`app`);
		return (
			<>
				<NavBar
					totalCount={
						this.state.habits.filter((habit) => habit.count > 0)
							.length
					}
				/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
					onReset={this.handleReset}
				/>
			</>
		);
	}
}
