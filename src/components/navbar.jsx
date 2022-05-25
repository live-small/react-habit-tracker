import React, { PureComponent } from "react";

export default class NavBar extends PureComponent {
	render() {
		console.log(`header`);
		return (
			<header>
				<i className="fa-solid fa-leaf"></i>
				<span className="title">Habit tracker</span>
				<span className="total-count">{this.props.totalCount}</span>
			</header>
		);
	}
}
