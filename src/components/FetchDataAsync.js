import React, { useEffect, useState } from "react";

function FetchDataAsync() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getData();
	}, []);
	// async function getData() {
	// 	const actualData = await fetch(
	// 		`https://jsonplaceholder.typicode.com/posts?_limit=10`
	// 	).then((response) => response.json());
	// 	console.log(actualData);
	// }
	const getData = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_limit=10`
			);
			if (!response.ok) {
				throw new Error(
					`This is an HTTP error: The status is ${response.status}`
				);
			}
			let actualData = await response.json();
			setData(actualData);
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
			<h4>FetchDataAsync</h4>
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

export default FetchDataAsync;
