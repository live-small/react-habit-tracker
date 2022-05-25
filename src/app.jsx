import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navbar";

import React, { Component } from "react";

export default class app extends Component {
	state = {
		habits: [
			{ id: 1, name: "Reading", count: 0 },
			{ id: 2, name: "eating", count: 0 },
			{ id: 3, name: "studying", count: 0 },
		],
		totalCount: 0,
	};
	// 필요한 상태값 : total count(실제로 하고 있는 습관 개수)

	handleIncrement = (habit) => {
		// 리액트는 state를 직접 수정하면 안된다. -> 불변성을 유지해야함!! 안그러면 버그가 많이 생김..
		const habits = [...this.state.habits];
		const key = habits.indexOf(habit);
		habits[key].count++;
		this.setState({ habits });
		this.setState({ totalCount: this.getTotalCount(habits) });
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
		this.setState({ totalCount: this.getTotalCount(habits) });
	};

	handleDelete = (habit) => {
		const habits = [...this.state.habits];
		const key = habits.indexOf(habit);
		habits.splice(key, 1);
		this.setState({ habits });
		this.setState({ totalCount: this.getTotalCount(habits) });
	};

	getTotalCount = (habits) => {
		return habits.filter((habit) => habit.count > 0).length;
	};

	handleAdd = (name) => {
		const id = this.state.habits.length + 1;
		const habits = [...this.state.habits, { name, id, count: 0 }];
		this.setState({ habits });
	};

	render() {
		return (
			<>
				<NavBar totalCount={this.state.totalCount} />
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
				/>
			</>
		);
	}
}
