import type { Preview } from "@storybook/react";
import React from "react";

import { AppProviders } from "../src/AppProviders";

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
		<AppProviders>
			<Story />
		</AppProviders>
	),
};

export default preview;
