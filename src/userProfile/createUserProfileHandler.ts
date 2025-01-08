import { http, HttpResponse } from "msw";

import {
	employeeUserFixture,
	enterpriseUserFixture,
	resellerUserFixture,
} from "./fixtures/userProfileFixtures";
import { apiUrlConfig } from "./constants/apiUrlConfig";

type UserScenario = "employee" | "reseller" | "enterprise" | "apiError";

const scenarioHandlers: Record<UserScenario, () => HttpResponse> = {
	employee: () => HttpResponse.json(employeeUserFixture),
	reseller: () => HttpResponse.json(resellerUserFixture),
	enterprise: () => HttpResponse.json(enterpriseUserFixture),
	apiError: () => {
		return new HttpResponse("Internal Server Error", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
			},
		});
	},
};

export function createUserProfileHandler(scenario: UserScenario = "employee") {
	return http.get(`${apiUrlConfig.baseUrl}${apiUrlConfig.userEndpoint}`, () => {
		return scenarioHandlers[scenario]();
	});
}
