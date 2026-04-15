import { Link, useRouteError } from "react-router";

const ErrrorPage = () => {
	const error = useRouteError();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<h1>Oops! an error occured.</h1>
			{error && <p>{error.data}</p>}
			<Link to="/">
				<button className="mt-5 px-3 py-1 underline hover:text-gray-300 cursor-pointer">
					Click to Go Home
				</button>
			</Link>
		</div>
	);
};

export default ErrrorPage;
