import React, { createContext, useContext } from "react";

//  The context itself does not hold the information,
// it only represents the kind of information you can provide or read from components.
const ThemeContext = createContext(null);

export default function MyContext() {
	return (
		<>
			{/* To pass context to a Button, 
        wrap it or one of its parent components into the corresponding context provider: */}
			<ThemeContext.Provider value="dark">
				<Form />
			</ThemeContext.Provider>
		</>
	);
}

function Form() {
	return (
		<Panel title="Welcome">
			<Button>Sign up</Button>
			<Button>Log in</Button>
		</Panel>
	);
}

function Panel({ title, children }) {
	const theme = useContext(ThemeContext);

	const className = "panel-" + theme;

	return (
		<>
			<section className={className}>
				<h2>{title}</h2>
				{children}
			</section>
		</>
	);
}

function Button({ children }) {
	const theme = useContext(ThemeContext);

	const className = "button-" + theme;

	return <button className={className}>{children}</button>;
}
