import { createHttpClient } from "../../api/createHttpClient";
import { apiUrlConfig } from "../constants/apiUrlConfig";
import { createUserProfileModel } from "../model/createUserProfileModel";
import { UserProfileResponse } from "../model/UserProfileResponse";

const createUserProfileService = (
	httpClient: ReturnType<typeof createHttpClient>
) => {
	return {
		async getUser() {
			const rawData = await httpClient.get<UserProfileResponse>(
				apiUrlConfig.userEndpoint
			);

			return createUserProfileModel(rawData);
		},
	};
};

export const userProfileService = createUserProfileService(
	createHttpClient(apiUrlConfig.baseUrl)
);
