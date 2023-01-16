import React, { useEffect, useState } from "react";

const apiUrl = "";

const FetchData = () => {
	const [data, setData] = useState("");
	const [show, setShow] = useState(false);
	const [name, setName] = useState("");

	useEffect(() => {
		getData();
	}, [name]);

	const getName = () => {
		setName("titan");
	};

	const getData = async () => {
		const response = await fetch(apiUrl);
		const jsonData = await response.json();
		setData(jsonData);
	};
	const toggleDiv = () => {
		setShow(!show);
	};

	return (
		<>
			<h4>FetchData</h4>
			<h5>Button toggle Challenge</h5>
			<button onClick={toggleDiv}>Toggle</button>
			{show ? <h4>Toggle seen</h4> : <h3>Toggle Hide</h3>}
			{show && <div>Toggle Div</div>}
			<h3>Check for dependency Array</h3>
			<button onClick={getName}>Dependency Check</button>
			<h3>{name}</h3>
		</>
	);
};

export default FetchData;
