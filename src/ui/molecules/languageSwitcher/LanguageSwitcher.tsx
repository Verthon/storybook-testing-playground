import { useLocale } from "../../../i18n/useLocale";
import { Select } from "../../atoms/select/Select";

export const LanguageSwitcher = () => {
	const { t, locale, defaultLocale, setLocale } = useLocale();

	return (
		<Select
			ariaLabel={t("switch_language")}
			value={locale}
			defaultValue={defaultLocale}
			list={[
				{ label: t("english"), value: "en" } as const,
				{ label: t("spanish"), value: "es" } as const,
			]}
			onChange={(_value, option) => setLocale(option.value as "en")}
		/>
	);
};
