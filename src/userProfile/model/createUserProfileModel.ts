import { UserProfileResponse } from "./UserProfileResponse";

function isEmployee(raw: UserProfileResponse): raw is UserProfileResponse & {
	account: { userAccountType: "EMPLOYEE" };
} {
	return raw.account.userAccountType === "EMPLOYEE";
}

function isReseller(raw: UserProfileResponse): raw is UserProfileResponse & {
	account: { userAccountType: "RESELLER" };
} {
	return raw.account.userAccountType === "RESELLER";
}

function isEnterprise(raw: UserProfileResponse): raw is UserProfileResponse & {
	account: { userAccountType: "ENTERPRISE" };
} {
	return raw.account.userAccountType === "ENTERPRISE";
}

const normalizeEmployee = (
	rawData: UserProfileResponse & {
		account: { userAccountType: "EMPLOYEE" };
	}
) => {
	return {
		userName: rawData.userName,
		email: rawData.email,
		userAccountType: "employee",
		department: rawData.account.department,
		managerName: rawData.account?.managerName,
	} as const;
};

const normalizeReseller = (
	raw: UserProfileResponse & {
		account: { userAccountType: "RESELLER" };
	}
) => {
	return {
		userAccountType: "reseller",
		userName: raw.userName,
		email: raw.email,
		resellerName: raw.account.resellerName,
		tier: raw.account.tier.toLowerCase() as "silver" | "gold" | "platinum",
	} as const;
};

const normalizeEnterprise = (
	raw: UserProfileResponse & {
		account: { userAccountType: "ENTERPRISE" };
	}
) => {
	return {
		userAccountType: "enterprise",
		userName: raw.userName,
		email: raw.email,
		dedicatedSupportEmail: raw.account.dedicatedSupportEmail,
		customDomainEnabled: raw.account.customDomainEnabled,
	} as const;
};

export const createUserProfileModel = (raw: UserProfileResponse) => {
	if (isEmployee(raw)) {
		return normalizeEmployee(raw);
	} else if (isReseller(raw)) {
		return normalizeReseller(raw);
	} else if (isEnterprise(raw)) {
		return normalizeEnterprise(raw);
	}

	return raw as never;
};
