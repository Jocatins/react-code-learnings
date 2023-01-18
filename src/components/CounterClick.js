import React, { Component } from "react";

export class CounterClick extends Component {
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
				<h3>Count value is {count}</h3>
				<button onClick={this.incrementCount}>incrementCount</button>
			</>
		);
	}
}

export default CounterClick;
