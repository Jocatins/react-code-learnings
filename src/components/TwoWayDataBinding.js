import React from "react";

function TwoWayDataBinding() {
	const [val, setVal] = React.useState("");

	const onChangeVal = (e) => {
		setVal(e.target.value);
	};

	return (
		<>
			<div>TwoWayDataBinding</div>
			<input value={val} type="text" onChange={onChangeVal} />
			<button disabled={val < 1}>Submit</button>
			<p>{val}</p>
		</>
	);
}

export default TwoWayDataBinding;
