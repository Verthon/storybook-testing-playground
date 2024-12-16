import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";

export const AppProviders = ({ children }: PropsWithChildren) => {
	return (
		<BrowserRouter>
			<MantineProvider>{children}</MantineProvider>
		</BrowserRouter>
	);
};