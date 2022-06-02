import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navbar";

import React, { useState } from "react";

const habitsInit = [
	{ id: 1, name: "Reading", count: 0 },
	{ id: 2, name: "eating", count: 0 },
	{ id: 3, name: "studying", count: 0 },
];

export default function App() {
	const [habits, setHabits] = useState(habitsInit);

	const handleIncrement = (habit) => {
		const updateHabits = habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});
		setHabits(updateHabits);
	};
	// 컴포넌트 리렌더링 될 때마다 재생성되지 않나요? -> 컴포넌트 밖에 두는 게 좋으려나?

	const handleDecrement = (habit) => {
		const updateHabits = habits.map((item) => {
			if (item.id === habit.id) {
				const count = habit.count - 1;
				return { ...habit, count: count < 0 ? 0 : count };
			}
			return item;
		});
		setHabits(updateHabits);
	};

	const handleDelete = (habit) => {
		const updateHabits = habits.filter((item) => item.id !== habit.id);
		setHabits(updateHabits);
	};

	const handleAdd = (name) => {
		const updateHabits = [...habits, { id: Date.now(), name, count: 0 }];
		setHabits(updateHabits);
	};

	const handleReset = () => {
		const updateHabits = habits.map((habit) => {
			if (habit.count !== 0) {
				return { ...habit, count: 0 };
			}
			return habit;
		});
		setHabits(updateHabits);
	};

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
