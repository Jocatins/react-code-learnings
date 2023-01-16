import React, { useEffect, useLayoutEffect, useState } from "react";

const UseEffect = () => {
	const [value, setValue] = useState(0);
	const [value1, setValue1] = useState(0);

	const [word, setWord] = useState("");
	const [word1, setWord1] = useState("");

	useEffect(() => {
		console.log(`state change word ${word}`);
	}, [word]);

	useEffect(() => {
		console.log(`state change word1 ${word1}`);
	}, [word1]);

	// useLayoutEffect(() => {
	// 	if (value === 0) {
	// 		setValue(10 + Math.random() * 2000);
	// 	}
	// }, [value]);

	// console.log(`useLayoutEffect values, ${value}`);

	// useEffect(() => {
	// 	if (value1 === 0) {
	// 		setValue(10 + Math.random() * 3000);
	// 	}
	// }, [value1]);
	// console.log(`useEffect values, ${value1}`);

	return (
		<>
			<button
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "15px",
				}}
				onClick={() => setValue(0)}
			>
				random number : {value}
			</button>
			<input
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>
			definition of word: {word}
			<input
				type="text"
				onChange={(e) => {
					setWord1(e.target.value);
				}}
			/>
			definition of word: {word1}
		</>
	);
};

export default UseEffect;
