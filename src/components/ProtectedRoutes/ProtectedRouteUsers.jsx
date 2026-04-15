import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router";

const ProtectedRouteUsers = ({ children }) => {
	const { loggedIn, loading } = useAuth();

	if (loading) return <p>Loading...</p>;

	if (!loggedIn) return <Navigate to="/login" />;

	return children;
};

export default ProtectedRouteUsers;
