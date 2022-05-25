import React, { PureComponent } from "react";

// export default function Habit() {
// 	return (
// <li className="habit">
// 	<span className="habit-name">Reading</span>
// 	<span className="habit-count">{this.state.count}</span>
// 	<button
// 		className="habit-button habit-increase"
// 		onClick={this.handleIncrement}
// 	>
// 		<i className="fa-solid fa-square-plus"></i>
// 	</button>
// 	<button className="habit-button habit-decrease">
// 		<i className="fa-solid fa-square-minus"></i>
// 	</button>
// 	<button className="habit-button habit-delete">
// 		<i className="fa-solid fa-trash"></i>
// 	</button>
// </li>
// 	);
// }

// class 컴포넌트
class Habit extends PureComponent {
	render() {
		const { onIncrement, onDecrement, onDelete, habit } = this.props;
		const { name, count } = habit;
		console.log(`render : ${habit.name}`);

		return (
			<li className="habit">
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>
				<button
					className="habit-button habit-increase"
					onClick={() => onIncrement(habit)}
				>
					<i className="fa-solid fa-square-plus"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={() => onDecrement(habit)}
				>
					<i className="fa-solid fa-square-minus"></i>
				</button>
				<button
					className="habit-button habit-delete"
					onClick={() => onDelete(habit)}
				>
					<i className="fa-solid fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;
