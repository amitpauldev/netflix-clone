import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { signUp, logIn } from "../../firebase";
import { useNavigate } from "react-router";

const Login = () => {
	const [signState, setSignState] = useState("Sign In");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");

	const navigate = useNavigate();

	const getFriendlyError = (error) => {
		switch (error.code) {
			case "auth/user-not-found":
				return "No account found with this email.";
			case "auth/wrong-password":
				return "Incorrect password.";
			case "auth/email-already-in-use":
				return "Email already exists.";
			case "auth/invalid-credential":
				return "Invalid email or password.";
			case "auth/weak-password":
				return "Password should be at least 6 characters.";
			default:
				return "Something went wrong. Try again.";
		}
	};

	const user_handler = async (e) => {
		e.preventDefault();
		setError("");

		try {
			if (signState === "Sign Up") {
				await signUp(name, email, password);
				setSignState("Sign In");
			} else {
				await logIn(email, password);
				navigate("/home");
			}
		} catch (error) {
			setError(getFriendlyError(error));
		}
	};

	return (
		<div className="bg-banner relative">
			{/* Overlay */}
			<div className="absolute w-full h-full bg-black/40"></div>

			{/* Content */}
			<div className="relative z-10">
				{/* Logo */}
				<img
					onClick={() => navigate("/")}
					src={logo}
					alt="Netflix Logo"
					className="w-32 pt-6 mb-6 ml-6 cursor-pointer"
				/>

				{/* Form Container */}
				<div className="flex justify-center items-center h-[80vh]">
					<div className="bg-black/75 p-10 rounded w-90 max-w-md">
						<h1 className="text-white text-3xl font-bold mb-6">{signState}</h1>

						<form className="flex flex-col gap-4">
							{signState === "Sign Up" && (
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									type="text"
									placeholder="Your Name"
									className="p-3 bg-gray-700 text-white rounded outline-none"
									required
								/>
							)}

							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="Email"
								className="p-3 bg-gray-700 text-white rounded outline-none"
								required
							/>

							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
								className="p-3 bg-gray-700 text-white rounded outline-none"
								required
							/>

							<button
								onClick={user_handler}
								type="submit"
								className="bg-red-600 hover:bg-red-700 text-white p-3 rounded font-semibold cursor-pointer"
							>
								{signState}
							</button>

							{/* Remember + Help */}
							<div className="flex justify-between items-center text-gray-400 text-sm">
								<div className="flex items-center gap-2">
									<input type="checkbox" id="remember" />
									<label htmlFor="remember">Remember me</label>
								</div>
								<p className="cursor-pointer hover:underline">Need help?</p>
							</div>
						</form>

						{/* Footer */}
						<div className="mt-6 text-gray-400 text-sm">
							{signState === "Sign In" ? (
								<p>
									New to Netflix?{" "}
									<span
										className="text-white cursor-pointer hover:underline"
										onClick={() => setSignState("Sign Up")}
									>
										Sign Up Now
									</span>
								</p>
							) : (
								<p>
									Already have an account?{" "}
									<span
										className="text-white cursor-pointer hover:underline"
										onClick={() => setSignState("Sign In")}
									>
										Sign In
									</span>
								</p>
							)}

							<p className="mt-3 text-xs">
								This page is protected by Google reCAPTCHA.
							</p>
							{error && <p className="mt-2 text-red-500">{error}</p>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
