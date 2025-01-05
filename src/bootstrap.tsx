import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppProviders } from "./AppProviders.tsx";
import { Routes } from "./routes.tsx";
import "./index.css";
import { enableMockServer } from "./mocks/server";

export const renderApp = () => {
	createRoot(document.getElementById("root")!).render(
		<StrictMode>
			<AppProviders>
				<Routes />
			</AppProviders>
		</StrictMode>
	);
};

enableMockServer().then(() => renderApp());
