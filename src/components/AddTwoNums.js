import React, { useState } from "react";

function AddTwoNums() {
	const [number1, setNumber1] = useState();
	const [number2, setNumber2] = useState();
	const [total, setTotal] = useState();

	function calculateTotal() {
		setTotal(number1 + number2);
	}

	return (
		<>
			<div>
				AddTwoNums
				<label>Number 1</label>
				<input
					type="number"
					value={number1}
					onChange={(e) => setNumber1(+e.target.value)}
				/>
				<label>Number 2</label>
				<input
					type="number"
					value={number2}
					onChange={(e) => setNumber2(+e.target.value)}
				/>
				<button onClick={calculateTotal}>Add Numbers</button>
				<h4>Total : {total}</h4>
			</div>
		</>
	);
}

export default AddTwoNums;
