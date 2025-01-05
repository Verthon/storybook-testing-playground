import { PropsWithChildren } from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import { UIProviders } from "../AppProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

const client = new QueryClient({
	defaultOptions: { queries: { retry: false } },
});

export const createTestWrapper = ({ children }: PropsWithChildren) => {
	const user = userEvent.setup();

	const { rerender, unmount, asFragment, baseElement } = render(
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

	return {
		user,
		rerender,
		unmount,
		asFragment,
		baseElement,
	};
};

export const createUIWrapper = ({ children }: PropsWithChildren) => {
	const user = userEvent.setup();

	const { rerender, unmount, asFragment, baseElement } = render(
		<UIProviders>{children}</UIProviders>
	);

	return {
		user,
		rerender,
		unmount,
		asFragment,
		baseElement,
	};
};
