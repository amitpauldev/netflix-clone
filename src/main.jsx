import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";
import AllCardsDataProvider from "./contexts/AllCardsDataProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<AllCardsDataProvider>
				<RouterProvider router={router} />
			</AllCardsDataProvider>
		</Provider>
	</StrictMode>,
);
