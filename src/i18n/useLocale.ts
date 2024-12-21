import { useCallback, useMemo } from "react";
import { useIntl } from "react-intl";
import { TranslationKeys } from "./messages/messages";
import { useLocaleContext } from "./hooks/useLocaleContext";

export const useLocale = () => {
	const intl = useIntl();
	const { defaultLocale, locale, setLocale } = useLocaleContext();

	const t = useCallback(
		(id: TranslationKeys, values?: Record<string, string | number>): string =>
			intl.formatMessage({ id }, values),
		[intl]
	);

	return useMemo(
		() => ({
			t,
			locale,
			defaultLocale,
			setLocale,
		}),
		[t, locale, defaultLocale, setLocale]
	);
};
