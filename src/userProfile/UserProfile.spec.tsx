import { screen } from "@testing-library/react";
import { createTestWrapper } from "../test/render";
import { UserProfile } from "./UserProfile";
import { testServer } from "../test/setup";
import { createUserProfileHandler } from "./createUserProfileHandler";

describe("UserProfile", () => {
	it("should display department and manager name when the current user is an employee", async () => {
		createTestWrapper({ children: <UserProfile /> });

		const department = await screen.findByText(/sales/i);
		const managerName = await screen.findByText(/alice boss/i);

		expect(department).toBeVisible();
		expect(managerName).toBeVisible();
	});

	it("should display reseller name and tier when the current user is an reseller", async () => {
		testServer.use(createUserProfileHandler("reseller"));
		createTestWrapper({ children: <UserProfile /> });

		const name = await screen.findByText(/acme inc./i);
		const tier = await screen.findByText(/silver/i);

		expect(name).toBeVisible();
		expect(tier).toBeVisible();
	});

	it("should display a dedicated support email when the current user is an enterprise", async () => {
		testServer.use(createUserProfileHandler("enterprise"));
		createTestWrapper({ children: <UserProfile /> });

		const supportEmail = await screen.findByText(/support@global.com/i);

		expect(supportEmail).toBeVisible();
	});

	it("should display an error message on server failure", async () => {
		testServer.use(createUserProfileHandler("apiError"));
		createTestWrapper({ children: <UserProfile /> });

		const errorInfo = await screen.findByText(
			/an error has occurred: HTTP error! status: 500/i
		);

		expect(errorInfo).toBeVisible();
	});
});
