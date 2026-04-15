import hero_banner from "../../assets/hero_banner(1).jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

import TitleCards from "../TitleCards/TitleCards";
import { useNavigate } from "react-router";

const Hero = () => {
	const navigate = useNavigate();

	return (
		<div className="relative w-full h-screen">
			<img
				src={hero_banner}
				alt="Hero Banner"
				className="mask-image  object-cover"
			/>
			<div className="absolute pl-[6%]  bottom-4 left-2">
				<img src={hero_title} alt="Hero Title" className="w-1/3 mb-6" />
				<p className="max-w-xl text-xs md:text-sm mb-6">
					A fantasy series, very successful, which delighted me and transmitted
					a dose of vivacity. The main actor expresses the inner feelings with
					versatility, in both roles, Hakan and Harun.
				</p>
				<div className="flex gap-4">
					<button
						onClick={() => navigate("/player/0")}
						className="flex items-center gap-2 text-xs md:text-sm bg-white text-black px-3 py-1.5 rounded cursor-pointer"
					>
						<img src={play_icon} alt="Play" className="w-3.5 md:w-5" />
						Play
					</button>
					<button className="flex items-center gap-2 text-xs md:text-sm bg-white/30 text-white px-3 py-1.5 rounded cursor-pointer">
						<a
							href="https://en.wikipedia.org/wiki/The_Protector_(Turkish_TV_series)"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							<img src={info_icon} alt="Info" className="w-3.5 md:w-5" />
							More Info
						</a>
					</button>
				</div>

				<TitleCards />
			</div>
		</div>
	);
};

export default Hero;
