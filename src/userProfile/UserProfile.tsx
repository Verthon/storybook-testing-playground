import { useLocale } from "../i18n/useLocale";
import { useGetUserProfile } from "./hooks/useGetUserProfile";

export const UserProfile = () => {
	const { data, isPending, error } = useGetUserProfile();
	const { t } = useLocale();

	if (isPending) return <p>"Loading..."</p>;

	if (error) return <p>An error has occurred: {error.message}</p>;

	if (data.userAccountType === "employee") {
		return (
			<div>
				<dl>
					<dt>{t("userName")}:</dt>
					<dd>{data.userName}</dd>

					<dt>{t("email")}:</dt>
					<dd>{data.email}</dd>

					<dt>{t("department")}:</dt>
					<dd>{data.department}</dd>

					{data.managerName && (
						<>
							<dt>{t("managerName")}:</dt>
							<dd>{data.managerName}</dd>
						</>
					)}
				</dl>
			</div>
		);
	}

	if (data.userAccountType === "enterprise") {
		return (
			<div>
				<dl>
					<dt>{t("userName")}:</dt>
					<dd>{data.userName}</dd>

					<dt>{t("email")}:</dt>
					<dd>{data.email}</dd>

					<dt>{t("dedicatedSupportEmail")}:</dt>
					<dd>{data.dedicatedSupportEmail}</dd>
				</dl>
			</div>
		);
	}

	if (data.userAccountType === "reseller") {
		return (
			<div>
				<dl>
					<dt>{t("userName")}:</dt>
					<dd>{data.userName}</dd>

					<dt>{t("email")}:</dt>
					<dd>{data.email}</dd>

					<dt>{t("resellerName")}:</dt>
					<dd>{data.resellerName}</dd>

					<dt>{t("tier")}:</dt>
					<dd>{data.tier}</dd>
				</dl>
			</div>
		);
	}

	return <p>Something went wrong user not recognized</p>;
};
