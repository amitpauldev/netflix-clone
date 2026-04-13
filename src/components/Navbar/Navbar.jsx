import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
	const navRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				navRef.current.classList.add("bg-black");
			} else {
				navRef.current.classList.remove("bg-black");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			ref={navRef}
			className="fixed w-full py-5 px-[6%] flex items-center justify-between text-sm bg-gradient z-10 transition-colors duration-300"
		>
			<div className="flex items-center gap-12">
				<img className="w-24" src={logo} alt="Logo" />

				<ul className="flex items-center gap-5">
					<li>Home</li>
					<li>TV Shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
					<li>Browse By Languages</li>
				</ul>
			</div>
			<div className="flex items-center gap-4">
				<img className="cursor-pointer" src={search_icon} alt="Search" />
				<p>Children</p>
				<img src={bell_icon} alt="bell" />
				<div className="relative flex items-center gap-2 cursor-pointer group">
					<img className="rounded" src={profile_img} alt="profile" />
					<img src={caret_icon} alt="caret" />
					<p className="absolute top-full right-0 text-nowrap bg-gray-800 rounded-xl text-white py-2 px-4 hidden group-hover:block">
						Sign Out of Netflix
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
