import { useEffect, useState } from "react";
// import cards_data from "../../assets/cards/Cards_data";
import { useNavigate } from "react-router";

import { useAllCards } from "../../contexts/AllCardsDataProvider";

const TitleCards = ({ title, category }) => {
	const [apiData, setApiData] = useState([]);
	const navigate = useNavigate();

	const { setAllMovies } = useAllCards();

	// TMDB API Fetching
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
			`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
			options,
		)
			.then((res) => res.json())
			.then((res) => {
				setApiData(res.results);
				// push into global state
				// setAllMovies((prev) => {
				// 	const newMovies = res.results.filter(
				// 		(movie) => !prev.some((item) => item.id === movie.id),
				// 	);
				// 	return [...prev, ...newMovies, category];
				// });
				setAllMovies((prev) => {
					const newMovies = res.results
						.filter((movie) => !prev.some((item) => item.id === movie.id))
						.map((movie) => ({
							id: movie.id,
							original_title: movie.original_title,
							backdrop_path: movie.backdrop_path,
						}));

					return [...prev, ...newMovies];
				});
			})
			.catch((err) => console.error(err));
	}, []);
	// console.log(apiData);
	return (
		<div className="mt-12 mb-5">
			<h2 className="text-xl font-bold mb-2">
				{title ? title : "Trending Now"}
			</h2>
			<div
				className="flex gap-2 overflow-x-scroll scrollbar-hide"
				onWheel={(e) => {
					e.currentTarget.scrollLeft += e.deltaY;
				}}
			>
				{apiData.map((card, index) => (
					<div
						key={index}
						className="relative flex-none cursor-pointer"
						onClick={() => navigate(`/player/${card.id}`)}
					>
						<img
							src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} // base url + size + path
							alt={card.original_title}
							className="w-60 rounded"
						/>
						<h3 className="absolute bottom-1 right-2 mb-4 select-none">
							{card.original_title}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default TitleCards;
