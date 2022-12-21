import React from "react";

const List = (props) => {
	const { repos } = props;

	// if after fetching has completed and the repos prop is still empty, then it should return null.
	if (!repos) return null;

	if (!repos.length) return <p>No repos</p>;

	return (
		<ul>
			{repos.map((repo) => {
				return <li key={repo.id}>{repo.fullName}</li>;
			})}
		</ul>
	);
};
export default List;
