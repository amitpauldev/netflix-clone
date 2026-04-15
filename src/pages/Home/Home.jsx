import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const Home = () => {
	return (
		<div>
			<Navbar />

			<Hero />

			<div className="pl-[6%]">
				<TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
				<TitleCards title={"Only on Netflix"} category={"popular"} />
				<TitleCards title={"Upcoming Releases"} category={"upcoming"} />
				<TitleCards title={"Top Picks for You"} category={"now_playing"} />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
