import React from "react";

const higherOrderComponent = (WrappedComponent) => {
	class HOC extends React.Component {
		render() {
			return <WrappedComponent />;
		}
	}
	return HOC;
};
