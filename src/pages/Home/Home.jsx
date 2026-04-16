import Hero from "../../components/Hero/Hero";
import { useAllCards } from "../../contexts/AllCardsDataProvider";
import MovieCardLists from "../Movies/MovieCardLists";

const Home = () => {
	const { allMovies } = useAllCards();
	// console.log(allMovies);
	return (
		<div>
			<Hero />
			<MovieCardLists />
		</div>
	);
};

export default Home;
