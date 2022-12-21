import React from "react";

function handleLoading(Component) {
	return function WithLoading({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return <p>fetching data might take some time...</p>;
	};
}
export default handleLoading;
