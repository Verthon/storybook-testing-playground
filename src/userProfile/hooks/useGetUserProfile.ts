import { useQuery } from "@tanstack/react-query";

import { userProfileService } from "../services/userProfileService";

export const useGetUserProfile = () => {
	return useQuery({
		queryKey: ["userProfile"],
		queryFn: () => userProfileService.getUser(),
	});
};
