import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import AllCardsDataProvider from "./contexts/AllCardsDataProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AllCardsDataProvider>
			<RouterProvider router={router} />
		</AllCardsDataProvider>
	</StrictMode>,
);
