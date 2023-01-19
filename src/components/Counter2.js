import React, { useState } from "react";

function Counter2() {
	const [count, setCount] = useState(0);
	const [bitCoin, setBitCoin] = useState("Bit coin is now at $5000");

	const incrementCounter = () => {
		setCount((prev) => prev + 1);
	};
	const decrementCounter = () => {
		setCount((prev) => prev - 1);
	};
	return (
		<>
			<div>
				<h4>Counter</h4>
				<h4>You clicked {count} times</h4>
				<button onClick={incrementCounter}>Increase</button>
				<button onClick={decrementCounter}>Decrease</button>
				<div>
					<div></div>
				</div>
			</div>
		</>
	);
}

export default Counter2;
