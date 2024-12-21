import { screen } from "@testing-library/react";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { createUIWrapper } from "../../../test/render";

describe("LanguageSwitcher", () => {
	it("should initially display ONLY the `EN` selected as default", () => {
		createUIWrapper({ children: <LanguageSwitcher /> });

		const select = screen.getByRole("textbox");

		expect(select).toBeVisible();
		expect(select).toHaveValue("EN");
		expect(screen.queryByDisplayValue(/\bES\b/i)).toBe(null);
	});

	it("should switch the language", async () => {
		const { user } = createUIWrapper({ children: <LanguageSwitcher /> });
		const select = screen.getByRole("textbox");
		expect(select).toHaveValue("EN");
		expect(screen.queryByDisplayValue(/\bES\b/i)).toBe(null);

		await user.click(select);
		await user.click(screen.getByText(/\bES\b/i));

		expect(select).toHaveValue("ES");
		expect(screen.queryByDisplayValue(/EN/i)).toBe(null);
	});
});
