import React, { Component } from "react";
import AddForm from "./addForm";
import Habit from "./habit";

export default class Habits extends Component {
	render() {
		console.log(`habits`);

		const { habits, onIncrement, onDecrement, onDelete, onAdd, onReset } =
			this.props;

		return (
			<section className="habits">
				<AddForm onAdd={onAdd} />
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
				<button className="count-reset" onClick={onReset}>
					Reset All
				</button>
			</section>
		);
	}
}
