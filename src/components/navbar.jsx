import React, { Component } from "react";

export default class NavBar extends Component {
	render() {
		return (
			<nav>
				<i className="fa-solid fa-leaf"></i>
				<span className="title">Habit tracker</span>
				<span className="total-count">{this.props.totalCount}</span>
			</nav>
		);
	}
}
