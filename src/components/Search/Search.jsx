import { useRef, useState } from "react";
import search_icon from "../../assets/search_icon.svg";
import { useAllCards } from "../../contexts/AllCardsDataProvider";
import { useNavigate } from "react-router";

const Search = ({ searchRef, showSearch, setShowSearch }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const { allMovies } = useAllCards();

	const navigate = useNavigate();

	const inputRef = useRef();

	const filteredMovies = allMovies.filter((m) =>
		m.original_title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div ref={searchRef} className="flex items-center relative">
			<input
				ref={inputRef}
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search..."
				className={`bg-black border border-gray-600 text-sm pl-3 pr-8 py-2 rounded-xl outline-none transition-all duration-300 ${
					showSearch ? "w-40 opacity-100 ml-2" : "w-0 opacity-0"
				}`}
			/>
			<img
				onClick={(e) => {
					e.stopPropagation();
					setShowSearch((prev) => !prev);
					inputRef.current.focus();
				}}
				className="cursor-pointer w-5 absolute right-2"
				src={search_icon}
				alt="search"
			/>
			{showSearch && searchQuery && (
				<div className="absolute top-12 left-0 w-60 bg-black border border-gray-700 rounded-lg max-h-64 overflow-y-auto scrollbar-hide z-50">
					{filteredMovies.length > 0 ? (
						filteredMovies.slice(0, 8).map((movie) => (
							<div
								key={movie.id}
								onClick={() => navigate(`/player/${movie.id}`)}
								className="flex items-center gap-2 p-2 hover:bg-gray-800 cursor-pointer"
							>
								<img
									src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
									className="w-16 rounded"
								/>
								<p className="text-sm">{movie.original_title}</p>
							</div>
						))
					) : (
						<p className="p-2 text-gray-400 text-sm">No results found</p>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
