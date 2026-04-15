import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser({ ...currentUser });
				setLoggedIn(true);
			} else {
				// navigate("/login");
				setUser(null);
				setLoggedIn(false);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading, loggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
