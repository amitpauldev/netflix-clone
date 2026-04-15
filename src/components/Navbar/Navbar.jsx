import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useAuth } from "../../contexts/AuthContext";
import { logOut } from "../../firebase";
import { useNavigate } from "react-router";
import Search from "../Search/Search";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const [showProfile, setShowProfile] = useState(false);
	const [showSearch, setShowSearch] = useState(false);

	const menuRef = useRef();
	const searchRef = useRef();
	const profileRef = useRef();

	const { user } = useAuth();
	const navigate = useNavigate();

	// Scroll effect (React way)
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (e) => {
			// Search
			if (searchRef.current && !searchRef.current.contains(e.target)) {
				setShowSearch(false);
			}

			// Mobile menu
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false);
			}

			// Profile dropdown
			if (profileRef.current && !profileRef.current.contains(e.target)) {
				setShowProfile(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full z-50 px-[6%] py-4 flex items-center justify-between transition-all duration-300 ${
				scrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
			} ${menuOpen ? "bg-black transition-none duration-initial" : ""}`}
		>
			{/* LEFT */}
			<div className="flex items-center gap-6">
				<img
					onClick={() => navigate("/home")}
					className="w-24 cursor-pointer"
					src={logo}
					alt="logo"
				/>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-5 text-sm">
					<li
						onClick={() => navigate("/home")}
						className="cursor-pointer hover:text-gray-300"
					>
						Home
					</li>
					<li
						onClick={() => navigate("/movies")}
						className="cursor-pointer hover:text-gray-300"
					>
						Movies
					</li>
					<li
						onClick={() => navigate("/new&popular")}
						className="cursor-pointer hover:text-gray-300"
					>
						New & Popular
					</li>
					<li
						onClick={() => navigate("/tv-shows")}
						className="cursor-pointer hover:text-gray-300"
					>
						TV Shows
					</li>
					<li
						onClick={() => navigate("/mylist")}
						className="cursor-pointer hover:text-gray-300"
					>
						My List
					</li>
				</ul>
			</div>

			{/* RIGHT */}
			<div className="flex items-center gap-4">
				{/* Search */}
				<Search
					searchRef={searchRef}
					showSearch={showSearch}
					setShowSearch={setShowSearch}
				/>

				{/* Notifications */}
				<div className="relative group cursor-pointer">
					<img className="w-5" src={bell_icon} alt="bell" />

					<div className="absolute right-0 top-full mt-2 w-60 bg-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
						<p className="px-4 py-2 text-sm border-b border-gray-700">
							Notifications
						</p>
						<p className="px-4 py-2 text-sm text-gray-400">
							No new notifications
						</p>
					</div>
				</div>

				{/* Profile */}
				{user ? (
					<div ref={profileRef} className="relative cursor-pointer">
						<div
							className="flex items-center gap-2"
							onClick={(e) => {
								e.stopPropagation();
								setShowProfile((prev) => !prev);
							}}
						>
							<img className="w-8 rounded" src={profile_img} alt="profile" />
							{showProfile ? (
								<img className="w-3" src={caret_icon} alt="caret" />
							) : (
								<img className="w-3 rotate-270" src={caret_icon} alt="caret" />
							)}
						</div>

						{showProfile && (
							<div className="absolute right-0 top-full mt-2 w-48 bg-black rounded-md shadow-lg">
								<p className="px-4 py-2 text-sm border-b border-gray-700">
									{user?.email}
								</p>
								<p
									onClick={logOut}
									className="px-4 py-2 text-sm hover:bg-gray-800"
								>
									Sign Out
								</p>
							</div>
						)}
					</div>
				) : (
					<button
						onClick={() => navigate("/login")}
						className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded font-semibold cursor-pointer"
					>
						Sign In
					</button>
				)}

				{/* Mobile Menu Button */}
				<div
					className="md:hidden cursor-pointer text-xl"
					onClick={(e) => {
						e.stopPropagation();
						setMenuOpen((prev) => !prev);
					}}
				>
					☰
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<ul
					ref={menuRef}
					className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-5 md:hidden"
				>
					<li
						onClick={() => navigate("/home")}
						className="cursor-pointer hover:text-gray-300"
					>
						Home
					</li>
					<li
						onClick={() => navigate("/movies")}
						className="cursor-pointer hover:text-gray-300"
					>
						Movies
					</li>
					<li
						onClick={() => navigate("/new&popular")}
						className="cursor-pointer hover:text-gray-300"
					>
						New & Popular
					</li>
					<li
						onClick={() => navigate("/tv-shows")}
						className="cursor-pointer hover:text-gray-300"
					>
						TV Shows
					</li>
					<li
						onClick={() => navigate("/mylist")}
						className="cursor-pointer hover:text-gray-300"
					>
						My List
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
