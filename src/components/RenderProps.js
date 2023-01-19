import React, { Component } from "react";

export class RenderProps extends Component {
	constructor() {
		super();
		this.state = {
			name: "Titan",
			count: 0,
		};
	}
	incrementCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
	//  Here, render is a function and it receives an argument i.e. state “name”.
	render() {
		return <>{this.props.render(this.state.count, this.incrementCount)}</>;
	}
}

const Name = () => <RenderProps render={(name) => <h3>Hi {name}</h3>} />;

export default RenderProps;
