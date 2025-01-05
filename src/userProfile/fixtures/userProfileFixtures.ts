import { UserProfileResponse } from "../model/UserProfileResponse";

/** Example fixture for an Employee user */
export const employeeUserFixture = {
	account: {
		userAccountType: "EMPLOYEE",
		department: "Sales",
		managerName: "Alice Boss",
	},
	id: "emp-001",
	userName: "john_employee",
	email: "john.employee@domain.com",
} satisfies UserProfileResponse;

/** Example fixture for a Reseller user */
export const resellerUserFixture = {
	account: {
		userAccountType: "RESELLER",
		resellerName: "Acme Inc.",
		tier: "SILVER",
	},
	id: "res-101",
	userName: "acme_admin",
	email: "admin@acme.io",
} satisfies UserProfileResponse;

/** Example fixture for an Enterprise user */
export const enterpriseUserFixture: UserProfileResponse = {
	account: {
		userAccountType: "ENTERPRISE",
		dedicatedSupportEmail: "support@global.com",
		customDomainEnabled: true,
	},
	id: "ent-201",
	userName: "global_ceo",
	email: "ceo@global.com",
} satisfies UserProfileResponse;
