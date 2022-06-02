import AddForm from "./addForm";
import Habit from "./habit";
import React from "react";

export default function Habits({
	habits,
	onIncrement,
	onDecrement,
	onDelete,
	onAdd,
	onReset,
}) {
	console.log(`habits`);

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
