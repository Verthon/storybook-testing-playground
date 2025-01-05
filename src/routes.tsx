import { Route, Routes as RouterRoutes } from "react-router";

import { UserProfile } from "./userProfile/UserProfile";

import App from "./App";
import { AppLayout } from "./ui/layouts/AppLayout";

export const Routes = () => {
	return (
		<RouterRoutes>
			<Route element={<AppLayout/>}>
				<Route index element={<App />} />
				<Route path="profile" element={<UserProfile />} />
			</Route>
		</RouterRoutes>
	);
};
