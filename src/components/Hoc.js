import React, { useState } from "react";

// A pattern where a function takes a component as an argument and returns a new component

// const enhancedComponent = higherOrderComponent(originalComponent)
// const ironMan = withSuit(TonyStark)
// withSuit is the function that will enhance tony stark

function UpdatedComponent(OriginalComponent) {
	function NewComponent() {
		const [money, setMoney] = useState(10);

		const handleIncrease = () => {
			setMoney(money * 2);
		};
		return (
			<OriginalComponent handleIncrease={handleIncrease} money={money} />
		);
	}
	return NewComponent;
}
export default UpdatedComponent;

// They are basically a JS function that takes a React component as input and produces a new JS component
