import { createContext } from "react";

type Locale = "en" | "es";

type LocaleContextValue = {
	defaultLocale: Locale;
	locale: Locale;
	setLocale: (locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);