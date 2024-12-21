import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { LocaleProvider } from "./i18n/LocaleProvider";

export const UIProviders = ({ children }: PropsWithChildren) => {
	return (
		<LocaleProvider>
			<MantineProvider>{children}</MantineProvider>
		</LocaleProvider>
	);
};

export const AppProviders = ({ children }: PropsWithChildren) => {
	return (
		<BrowserRouter>
			<UIProviders>{children}</UIProviders>
		</BrowserRouter>
	);
};
