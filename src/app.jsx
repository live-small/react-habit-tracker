import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navbar";

import React, { useCallback, useState } from "react";

const habitsInit = [
	{ id: 1, name: "Reading", count: 0 },
	{ id: 2, name: "eating", count: 0 },
	{ id: 3, name: "studying", count: 0 },
];

export default function App() {
	const [habits, setHabits] = useState(habitsInit);

	const handleIncrement = useCallback((habit) => {
		setHabits((habits) =>
			habits.map((item) => {
				if (item.id === habit.id) {
					return { ...habit, count: habit.count + 1 };
				}
				return item;
			})
		);
	}, []);

	const handleDecrement = useCallback((habit) => {
		setHabits((habits) =>
			habits.map((item) => {
				if (item.id === habit.id) {
					const count = habit.count - 1;
					return { ...habit, count: count < 0 ? 0 : count };
				}
				return item;
			})
		);
	}, []);

	const handleDelete = useCallback((habit) => {
		setHabits((habits) => habits.filter((item) => item.id !== habit.id));
	}, []);

	const handleAdd = useCallback((name) => {
		setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
	}, []);

	const handleReset = useCallback(() => {
		setHabits((habits) =>
			habits.map((habit) => {
				if (habit.count !== 0) {
					return { ...habit, count: 0 };
				}
				return habit;
			})
		);
	}, []);

	return (
		<>
			<NavBar
				totalCount={habits.filter((habit) => habit.count > 0).length}
			/>
			<Habits
				habits={habits}
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
				onDelete={handleDelete}
				onAdd={handleAdd}
				onReset={handleReset}
			/>
		</>
	);
}
