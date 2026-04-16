import { useEffect, useState } from "react";
// import cards_data from "../../assets/cards/Cards_data";
import { useNavigate } from "react-router";

import { useAllCards } from "../../contexts/AllCardsDataProvider";
import { useGetMoviesQuery } from "../../features/api/apiSlice";

const TitleCards = ({ title, category }) => {
	const {
		data: moviesData,
		isLoading,
		error,
	} = useGetMoviesQuery({ category });
	const navigate = useNavigate();

	const { setAllMovies } = useAllCards();

	// filter out duplicate movies and add new movies to allMovies
	useEffect(() => {
		if (moviesData) {
			setAllMovies((prev) => {
				const newMovies = moviesData?.results?.filter(
					(movie) => !prev.some((m) => m.id === movie.id),
				);
				const updatedMovies = newMovies.map((movie) => ({
					id: movie.id,
					original_title: movie.original_title,
					backdrop_path: movie.backdrop_path,
				}));
				return [...prev, ...updatedMovies];
			});
		}
	}, [moviesData]);
	// console.log(moviesData.results);

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
				{isLoading ? (
					<h1>Loading...</h1>
				) : error ? (
					<h1>Something went wrong</h1>
				) : (
					moviesData?.results?.map((movie) => (
						<div
							key={movie.id}
							className="relative flex-none cursor-pointer"
							onClick={() => navigate(`/player/${movie.id}`)}
						>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} // base url + size + path
								alt={movie.original_title}
								className="w-60 rounded"
							/>
							<h3 className="absolute bottom-1 right-2 mb-4 select-none">
								{movie.original_title}
							</h3>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default TitleCards;
