import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const incrementCounter = () => {
		setCount((prev) => prev + 1);
	};
	const decrementCounter = () => {
		setCount((prev) => prev - 1);
	};
	return (
		<div>
			<h4>Counter</h4>
			<h4>{count}</h4>
			<button onClick={incrementCounter}>Increase</button>
			<button onClick={decrementCounter}>Decrease</button>
		</div>
	);
}

export default Counter;
