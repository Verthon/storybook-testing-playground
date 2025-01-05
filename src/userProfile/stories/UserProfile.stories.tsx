import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

import { UserProfile } from "../UserProfile";
import { createUserProfileHandler } from "../createUserProfileHandler";

export default {
	title: "UserProfile",
	component: UserProfile,
} satisfies Meta<typeof UserProfile>;

export const Employee: StoryObj<typeof UserProfile> = {
	parameters: {
		msw: {
			handlers: [createUserProfileHandler("employee")],
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const department = await canvas.findByText(/sales/i);
		const managerName = await canvas.findByText(/alice boss/i);

		expect(department).toBeVisible();
		expect(managerName).toBeVisible();
	},
};

export const Reseller: StoryObj<typeof UserProfile> = {
	parameters: {
		msw: {
			handlers: [createUserProfileHandler("reseller")],
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const name = await canvas.findByText(/acme inc./i);
		const tier = await canvas.findByText(/silver/i);
		expect(name).toBeVisible();
		expect(tier).toBeVisible();
	},
};

export const Enterprise: StoryObj<typeof UserProfile> = {
	parameters: {
		msw: {
			handlers: [createUserProfileHandler("enterprise")],
		},
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const supportEmail = await canvas.findByText(/support@global.com/i);

		expect(supportEmail).toBeVisible();
	},
};

export const ErrorState: StoryObj<typeof UserProfile> = {
	parameters: {
		msw: {
			handlers: [createUserProfileHandler("apiError")],
		},
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const errorInfo = await canvas.findByText(/an error has occurred: HTTP error! status: 500/i);

		expect(errorInfo).toBeVisible();
	},
};
