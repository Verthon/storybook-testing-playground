import { type PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";

import { useCurrentLocale } from "./hooks/useCurrentLocale";
import { messages } from "./messages/messages";
import { LocaleContext } from "./context/LocaleContext";

export const LocaleProvider = ({ children }: PropsWithChildren) => {
	const { currentLocale, setCurrentLocale } = useCurrentLocale();

	return (
		<IntlProvider
			defaultLocale={"en"}
			locale={currentLocale}
			messages={messages[currentLocale]}
		>
			<LocaleContext.Provider
				value={{ defaultLocale: "en", locale: currentLocale, setLocale: setCurrentLocale }}
			>
				{children}
			</LocaleContext.Provider>
		</IntlProvider>
	);
};
