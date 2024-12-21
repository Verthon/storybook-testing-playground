import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, screen } from "@storybook/test";

import { LanguageSwitcher } from "./LanguageSwitcher";

const meta = {
	title: "molecules/LanguageSwitcher",
	component: LanguageSwitcher,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		onLogin: fn(),
		onLogout: fn(),
		onCreateAccount: fn(),
	},
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLanguage: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const select = canvas.getByRole("textbox");

		await expect(select).toBeVisible();
		await expect(select).toHaveValue("EN");
		await expect(canvas.queryByDisplayValue(/\bES\b/i)).toBe(null);
	},
};

export const SwitchLanguageToSpanish: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(document.body);

		const select = canvas.getByRole("textbox");
		expect(select).toHaveValue("EN");
		expect(canvas.queryByDisplayValue(/\bES\b/i)).toBe(null);

    console.log('select', canvasElement)

		await userEvent.click(select);
		await userEvent.click(screen.getByText(/\bES\b/i));

		await expect(select).toHaveValue("ES");
		await expect(canvas.queryByDisplayValue(/EN/i)).toBe(null);
	},
};
