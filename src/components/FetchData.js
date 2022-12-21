import React, { useEffect } from "react";

const apiUrl = "";

const FetchData = () => {
	const [data, setData] = useState("");

	const getData = async () => {
		const response = await fetch(apiUrl);
		const jsonData = await response.json();
		setData(jsonData);
	};

	useEffect(() => {
		getData();
	}, []);
	return <div>FetchData</div>;
};

export default FetchData;
