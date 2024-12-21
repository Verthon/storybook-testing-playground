import { PropsWithChildren } from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import { AppProviders, UIProviders } from "../AppProviders";

export const createTestWrapper = ({ children }: PropsWithChildren) => {
	const user = userEvent.setup();

	const { rerender, unmount, asFragment, baseElement } = render(
		<AppProviders>{children}</AppProviders>
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
