import { createBrowserRouter, Outlet } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Player from "../pages/Player/Player";
import AuthProvider from "../contexts/AuthContext";
import ProtectedRouteUsers from "../components/ProtectedRoutes/ProtectedRouteUsers";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Movies from "../pages/Movies/Movies";
import NewAndPopular from "../pages/NewAndPopular/NewAndPopular";
import TVShows from "../pages/TVShows/TVShows";
import MyLists from "../pages/MyLists/MyLists";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const RootLayout = () => {
	return (
		<AuthProvider>
			<Navbar />
			<Outlet />
			<Footer />
		</AuthProvider>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/movies",
				element: <Movies />,
			},
			{
				path: "/new&popular",
				element: <NewAndPopular />,
			},
			{
				path: "/tv-shows",
				element: <TVShows />,
			},
			{
				path: "/mylist",
				element: (
					<ProtectedRouteUsers>
						<MyLists />
					</ProtectedRouteUsers>
				),
			},
		],
	},
	{
		path: "/login",
		errorElement: <ErrorPage />,
		element: (
			<AuthProvider>
				<Login />
			</AuthProvider>
		),
	},
	{
		path: "/player/:id",
		errorElement: <ErrorPage />,
		element: (
			<AuthProvider>
				<ProtectedRouteUsers>
					<Player />
				</ProtectedRouteUsers>
			</AuthProvider>
		),
	},
]);

export default router;
