import type { Preview } from "@storybook/react";
import React from "react";
import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";

import { TestAppProviders } from "../src/AppProviders";

initializeMsw({ onUnhandledRequest: "warn" });

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	decorators: (Story) => (
		<TestAppProviders>
			<Story />
		</TestAppProviders>
	),

	loaders: [mswLoader],
};

export default preview;
