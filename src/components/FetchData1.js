import React, { useEffect, useState } from "react";

function FetchData1() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// data fetching here
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((actualData) => {
				setData(actualData);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			<h3>Fetch (url)API Posts</h3>
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

export default FetchData1;
