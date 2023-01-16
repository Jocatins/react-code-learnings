import React, { useEffect, useLayoutEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const [bitCoin, setBitCoin] = useState("Bit coin is now at $5000");

	// useLayoutEffect(() => {
	// 	setBitCoin("Bitcoin will hit 100k");

	// 	console.log(
	// 		"UseLayoutEffect is calling for price of bitcoins",
	// 		bitCoin
	// 	);
	// }, [bitCoin]);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
		//	console.log(count);
	}, [count]);

	// useLayoutEffect(() => {
	// 	//
	// 	return () => {

	// 	}
	// }, [dependencies])

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

export default Counter;
