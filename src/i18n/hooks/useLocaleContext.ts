import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const useLocaleContext = () => {
	const localeContext = useContext(LocaleContext);

	if (localeContext === undefined) {
		throw new Error(
			"LocaleContext is unavailable, make sure you are using LocaleContextController"
		);
	}

	return localeContext;
};
