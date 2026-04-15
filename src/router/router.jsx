import { createBrowserRouter, Outlet } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Player from "../pages/Player/Player";
import AuthProvider from "../contexts/AuthContext";
import ProtectedRouteUsers from "../components/ProtectedRoutes/ProtectedRouteUsers";

const RootLayout = () => {
	return (
		<AuthProvider>
			<Outlet />
		</AuthProvider>
	);
};

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/player/:id",
				element: (
					<ProtectedRouteUsers>
						<Player />
					</ProtectedRouteUsers>
				),
			},
		],
	},
]);

export default router;
