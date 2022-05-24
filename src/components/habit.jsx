import React, { Component } from "react";

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
class Habit extends Component {
	state = {
		count: 0,
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
		// setState안쓰면 리액트는 상태가 바뀐 걸 감지하지 못하고, 리렌더링 시켜주지 않는다
	};

	handleDecrement = () => {
		const updateCount = this.state.count - 1;
		this.setState({ count: updateCount < 0 ? 0 : updateCount });
	};

	render() {
		return (
			<li className="habit">
				<span className="habit-name">Reading</span>
				<span className="habit-count">{this.state.count}</span>
				<button
					className="habit-button habit-increase"
					onClick={this.handleIncrement}
				>
					<i className="fa-solid fa-square-plus"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={this.handleDecrement}
				>
					<i className="fa-solid fa-square-minus"></i>
				</button>
				<button className="habit-button habit-delete">
					<i className="fa-solid fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;
