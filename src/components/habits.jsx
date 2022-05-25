import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
	render() {
		const { habits, onIncrement, onDecrement, onDelete, onAdd } =
			this.props;
		// input을 잡으려면 useRef밖에 없나? <= class는 어떻게 대응 ?

		return (
			<section className="habits">
				<form className="add-form">
					<input placeholder="habit" className="add-input"></input>
					<button className="habit-add" onClick={() => onAdd()}>
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
