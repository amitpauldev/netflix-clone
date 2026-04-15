import TitleCards from "../../components/TitleCards/TitleCards";

const MovieCardLists = () => {
	return (
		<div className="pl-[6%] ">
			<TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
			<TitleCards title={"Upcoming Releases"} category={"upcoming"} />
			<TitleCards title={"Top Picks for You"} category={"now_playing"} />
			<TitleCards title={"Only on Netflix"} category={"popular"} />
		</div>
	);
};

export default MovieCardLists;
