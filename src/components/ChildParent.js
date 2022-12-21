import React from "react";

function Child({ setValue }) {
	return (
		<>
			<h5>Child Component</h5>
			<button
				onClick={() => setValue("I need to be updated from my child")}
			>
				Change Parent Value
			</button>
		</>
	);
}
function Parent() {
	const [value, setValue] = React.useState("");

	return (
		<>
			<h3>Update Parent state challenge</h3>
			<div>
				<h4>{value}</h4>
				<Child setValue={setValue} />
			</div>
		</>
	);
}

export default Parent;
