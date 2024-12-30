import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, screen } from "@storybook/test";

import { LanguageSwitcher } from "./LanguageSwitcher";

const meta = {
	title: "molecules/LanguageSwitcher",
	component: LanguageSwitcher,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
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
	play: async () => {
		const canvas = within(document.body);
		const user = userEvent.setup();

		const select = canvas.getByRole("textbox");
		expect(select).toHaveValue("EN");
		expect(canvas.queryByDisplayValue(/\bES\b/i)).toBe(null);

		await user.click(select);
		await user.click(screen.getByText(/\bES\b/i));

		await expect(select).toHaveValue("ES");
		await expect(canvas.queryByDisplayValue(/EN/i)).toBe(null);
	},
};
