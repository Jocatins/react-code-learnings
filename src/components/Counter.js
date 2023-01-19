import React from "react";

function Counter(props) {
	const incrementCounter = () => {
		//
	};
	const decrementCounter = () => {
		//
	};
	return (
		<>
			<div>
				<h4>Counter</h4>
				<h4>You clicked {props.count} times</h4>
				<button onClick={props.incrementCount}>Increase</button>
				<button onClick={decrementCounter}>Decrease</button>
				<div>
					<div></div>
				</div>
			</div>
		</>
	);
}

export default Counter;
