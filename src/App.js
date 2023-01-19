import React, { useRef } from "react";
import RenderProps from "./components/RenderProps";
import "./style.css";
import Counter from "./components/Counter";
// import { Canvas } from "react-three-fiber";
// import { useBox } from "use-canon";
// import { OrbitControls, Stars } from "drei";
// import { useState } from "react";

// function Box() {
// 	return (
// 		<mesh position={[0, 2, 0]}>
// 			<boxBufferGeometry attach="geometry" />
// 			<meshLambertMaterial attach="material" color="hotpink" />
// 		</mesh>
// 	);
// }
// function Plane() {
// 	return (
// 		<mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
// 			<planeBufferGeometry attach="geometry" args={[100, 100]} />
// 			<meshLambertMaterial attach="material" color="lightblue" />
// 		</mesh>
// 	);
// }

// let obj = {
// 	initCount: 10,
// };
// function obj1() {
// 	obj.initCount += 1;
// 	return obj.initCount;
// }

// import List from "./components/List";
// import handleLoading from "./components/handleLoading";

// const ListWithLoading = handleLoading(List);

function App() {
	// const [countObj, setCountObj] = useState(obj);
	const inputRef = useRef(null);

	const onButtonClick = () => {
		inputRef.current.focus();
	};
	return (
		<div className="App">
			{/* <Canvas>
				<OrbitControls />
				<Stars />
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 15, 10]} angle={0.3} />
				<Box />
			</Canvas> */}
			<input ref={inputRef} type="text" />
			<button onClick={onButtonClick}>Focus</button>

			<RenderProps
				render={(count, incrementCount) => {
					return (
						<Counter
							count={count}
							incrementCount={incrementCount}
						/>
					);
				}}
			/>
		</div>
	);
}

// class App extends React.Component {
// 	state = {
// 		loading: false,
// 		repos: null,
// 	};
// 	componentDidMount() {
// 		this.setState({ loading: true });
// 		fetch(`https://api.github.com/users/hacktivist123/repos`)
// 			.then((res) => res.json())
// 			.then((repos) => {
// 				console.log(repos);
// 				this.setState({ loading: false, repos: repos });
// 			});
// 	}
// 	render() {
// 		return (
// 			<ListWithLoading
// 				isLoading={this.state.loading}
// 				repos={this.state.repos}
// 			></ListWithLoading>
// 		);
// 	}
// }

export default App;
