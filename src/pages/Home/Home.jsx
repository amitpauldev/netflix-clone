import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	return (
		<div>
			<Navbar />

			<div className="relative w-full h-screen">
				<img
					src={hero_banner}
					alt="Hero Banner"
					className="mask-image w-full h-full object-cover"
				/>
				<div className="absolute pl-[6%]  bottom-4 left-2">
					<img src={hero_title} alt="Hero Title" className="w-1/3 mb-6" />
					<p className="max-w-xl text-sm mb-6">
						A fantasy series, very successful, which delighted me and
						transmitted a dose of vivacity. The main actor expresses the inner
						feelings with versatility, in both roles, Hakan and Harun.
					</p>
					<div className="flex gap-4">
						<button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded cursor-pointer">
							<img src={play_icon} alt="Play" className="w-5" />
							Play
						</button>
						<button className="flex items-center gap-2 bg-white/30 text-white px-3 py-1.5 rounded cursor-pointer">
							<img src={info_icon} alt="Info" className="w-5" />
							More Info
						</button>
					</div>

					<TitleCards />
				</div>
			</div>

			<div className="pl-[6%]">
				<TitleCards title={"Only on Netflix"} />
				<TitleCards title={"Blockbuster Movies"} />
				<TitleCards title={"Upcoming Releases"} />
				<TitleCards title={"Top Picks for You"} />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
