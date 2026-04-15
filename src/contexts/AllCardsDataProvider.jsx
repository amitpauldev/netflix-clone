import { createContext, useContext, useState } from "react";

export const AllCardsContext = createContext();

export const useAllCards = () => {
	return useContext(AllCardsContext);
};

const AllCardsDataProvider = ({ children }) => {
	const [allMovies, setAllMovies] = useState([]);

	return (
		<AllCardsContext.Provider value={{ allMovies, setAllMovies }}>
			{children}
		</AllCardsContext.Provider>
	);
};

export default AllCardsDataProvider;
