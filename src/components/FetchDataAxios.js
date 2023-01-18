import axios from "axios";
import React, { useState, useEffect } from "react";

function FetchDataAxios() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getData();
	});

	const getData = async () => {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?_limit=10`
			);
			setData(response.data);
			setError(null);
		} catch (err) {
			setError(err.message);
			setData(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<h1>FetchDataAxios</h1>
			{loading && <div>A moment Please </div>}
			{error && (
				<div>{`There is a problem fetching the post data- ${error}`}</div>
			)}
			<ul>
				{data &&
					data.map(({ id, title }) => (
						<li key={id}>
							<h3>{title}</h3>
						</li>
					))}
			</ul>
		</>
	);
}

export default FetchDataAxios;
