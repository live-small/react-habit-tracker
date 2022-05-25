import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navbar";

import React, { Component } from "react";

export default class app extends Component {
	render() {
		return (
			<>
				<NavBar />
				<Habits />
			</>
		);
	}
}
