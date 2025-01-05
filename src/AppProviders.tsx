import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import { LocaleProvider } from "./i18n/LocaleProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

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
			<QueryClientProvider client={client}>
				<UIProviders>
					<ErrorBoundary fallback={<div>Something went wrong</div>}>
						{children}
					</ErrorBoundary>
				</UIProviders>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export const TestAppProviders = ({ children }: PropsWithChildren) => {
	return (
		<MemoryRouter>
			<QueryClientProvider client={client}>
				<UIProviders>
					<ErrorBoundary fallback={<div>Something went wrong</div>}>
						{children}
					</ErrorBoundary>
				</UIProviders>
			</QueryClientProvider>
		</MemoryRouter>
	);
};
