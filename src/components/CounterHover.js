import React, { Component } from "react";

export class CounterHover extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	incrementCount = () => {
		this.setState((prev) => {
			return { count: prev.count + 1 };
		});
	};
	render() {
		const { count } = this.state;
		return (
			<>
				<h4 onMouseOver={this.incrementCount}>Hovered {count} times</h4>
			</>
		);
	}
}

export default CounterHover;
