import React from "react";
import facebook_icon from "../../assets/icons/facebook_icon.png";
import twitter_icon from "../../assets/icons/twitter_icon.png";
import instagram_icon from "../../assets/icons/instagram_icon.png";
import youtube_icon from "../../assets/icons/youtube_icon.png";

const Footer = () => {
	return (
		<footer className="bg-black text-gray-400 pl-[6%] py-10 text-sm mt-20">
			{/* Social Icons */}
			<div className="flex gap-4 mb-6">
				<img
					src={facebook_icon}
					alt="facebook"
					className="w-6 cursor-pointer hover:opacity-80"
				/>
				<img
					src={twitter_icon}
					alt="twitter"
					className="w-6 cursor-pointer hover:opacity-80"
				/>
				<img
					src={instagram_icon}
					alt="instagram"
					className="w-6 cursor-pointer hover:opacity-80"
				/>
				<img
					src={youtube_icon}
					alt="YouTube"
					className="w-6 cursor-pointer hover:opacity-80"
				/>
			</div>

			{/* Links Section */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
				<ul className="space-y-2">
					<li className="hover:underline cursor-pointer">Audio Description</li>
					<li className="hover:underline cursor-pointer">Investor Relations</li>
					<li className="hover:underline cursor-pointer">Legal Notices</li>
				</ul>

				<ul className="space-y-2">
					<li className="hover:underline cursor-pointer">Help Center</li>
					<li className="hover:underline cursor-pointer">Jobs</li>
					<li className="hover:underline cursor-pointer">Cookie Preferences</li>
				</ul>

				<ul className="space-y-2">
					<li className="hover:underline cursor-pointer">Account</li>
					<li className="hover:underline cursor-pointer">Ways to Watch</li>
					<li className="hover:underline cursor-pointer">
						Corporate Information
					</li>
				</ul>

				<ul className="space-y-2">
					<li className="hover:underline cursor-pointer">Media Center</li>
					<li className="hover:underline cursor-pointer">Terms of Use</li>
					<li className="hover:underline cursor-pointer">Contact Us</li>
				</ul>
			</div>

			{/* Button */}
			<button className="border border-gray-600 px-4 py-1 rounded mb-4 hover:bg-gray-800 transition">
				English
			</button>

			{/* Bottom Text */}
			<p className="text-gray-500">Netflix Bangladesh Clone By Amit © 2026</p>
		</footer>
	);
};

export default Footer;
