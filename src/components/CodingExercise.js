import React, { useState } from "react";

const users = [
	{ name: "Philip", id: 1 },
	{ name: "Soccer", id: 2 },
	{ name: "Joca", id: 3 },
];
const userList = users.map((user) => <li key={user.id}>{user.name}</li>);

function CodingExercise() {
	const [show, setShow] = useState(true);

	const [value, setValue] = useState("");

	const showButton = () => {
		setShow(!show);
		// if (show) {
		// 	return "Hide Element";
		// } else {
		// 	return "Show Element";
		// }
	};

	return (
		<div>
			<h3>User Items</h3>
			{userList}
			<button onClick={showButton}>Toggle</button>
			{show && <div>Toggle Challenge</div>}
			<h3>Updating the view</h3>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<h4>{value}</h4>
			<button disabled={value.length < 1}>Submit</button>
		</div>
	);
}

export default CodingExercise;
