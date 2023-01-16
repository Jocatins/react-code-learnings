import React, { useState } from "react";
import { login } from "./utils";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const disableButton = !email || password.length < 6 || loading;

	const handleLogin = async () => {
		setError(null);
		setLoading(true);
		try {
			await login({ email, password });
			alert("Login successful");
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	return (
		<>
			<h4>LoginForm</h4>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div>
				<div>
					<p style={{ color: "red" }}>{error}</p>
				</div>
				<button onClick={handleLogin} disabled={disableButton}>
					Submit
				</button>
			</div>
		</>
	);
}

export default LoginForm;
