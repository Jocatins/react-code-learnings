import React from "react";
import UpdatedComponent from "./Hoc";

function Hoc2({ money, handleIncrease }) {
	return (
		<>
			<h4>Hoc2 is offering ${money}</h4>
			<button onClick={handleIncrease}>Increase Money</button>
		</>
	);
}

export default UpdatedComponent(Hoc2);
