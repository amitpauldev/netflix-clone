import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
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
				{cards_data.map((card, index) => (
					<div key={index} className="relative flex-none">
						<img
							src={card.image}
							alt={card.title}
							className="w-60 rounded cursor-pointer"
						/>
						<h3 className="absolute bottom-1 right-2 mb-4">{card.name}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default TitleCards;
