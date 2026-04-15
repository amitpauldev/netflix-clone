import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router";

const Player = () => {
	const { id } = useParams();

	const [apiData, setApiData] = useState({
		name: "",
		key: "",
		published_at: "",
		typeof: "",
	});

	const navigate = useNavigate();

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWYzYzI5ZjcxZGE4NGU0NDVkNmJiMTkzM2Q2OThkNyIsIm5iZiI6MTc3NjA4Njk0Ni4xNjUsInN1YiI6IjY5ZGNlZmEyNTI0ZGFkZDEyZGI2NTZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DOgHq8LQt6gEy73KYZYml8vMr69RoWpppn3SGtKYGLI",
		},
	};

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
			options,
		)
			.then((res) => res.json())
			.then((res) => setApiData(res.results[0]))
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<div className="w-full h-screen bg-black text-white relative flex flex-col">
			{/* Back Button */}
			<img
				src={back_arrow_icon}
				alt="Back"
				className="absolute top-5 left-5 w-10 cursor-pointer z-20"
				onClick={() => navigate("/home")}
			/>

			{/* Video Section */}
			<div className="flex justify-center items-center mt-10">
				<iframe
					className="w-[90%] h-[90vh] rounded-lg"
					src={`https://www.youtube.com/embed/${apiData.key ? apiData.key : "80dqOwAOhbo"}`}
					title="Trailer"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				></iframe>
			</div>

			{/* Info Section */}
			<div className="px-10 py-5 flex justify-between text-gray-300 text-sm">
				<p>Published: {apiData?.published_at?.slice(0, 10)}</p>
				<p>Name: {apiData?.name}</p>
				<p>Type: {apiData?.type}</p>
			</div>
		</div>
	);
};

export default Player;
