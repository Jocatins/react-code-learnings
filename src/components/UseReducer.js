// `useReducer` ==> is a React Hook that lets you add a reducer to your component.

import React, { useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "incrementAge": {
			return {
				name: state.name,
				age: state.age + 1,
			};
		}
		case "changedName": {
			return {
				name: action.nextName,
				age: state.age,
			};
		}
	}
	throw Error(`Unknown Error ${action.type}`);
}

const initialState = { name: "Taylor", age: 42 };

function UseReducer() {
	// the useReducer returns an array with exactly two values
	// current state and dispatch function
	const [state, dispatch] = useReducer(reducer, initialState);
	// current state --> during first render, it is set to initArgs
	// dispatch function lets you update the state to a different value and trigger re-render

	const handleButtonClick = () => {
		// You need to pass the action as the only argument to the dispatch function
		// Action --> The action performed by the user, an action is usually an object with a type
		// property identifying it
		dispatch({ type: "incrementAge" });
	};
	function handleInput(e) {
		dispatch({
			type: "changedName",
			nextName: e.target.value,
		});
	}

	return (
		<>
			<h4>Use Reducer</h4>
			<input type="text" value={state.name} onChange={handleInput} />
			<button onClick={handleButtonClick}>Increment Age</button>
			<p>
				Hello: You are {state.name} and {state.age} years of age
			</p>
		</>
	);
}

export default UseReducer;
