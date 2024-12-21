import { useLocalStorage } from "@mantine/hooks";

export const useCurrentLocale = () => {
	const [currentLocale, setCurrentLocale] = useLocalStorage<'en' | 'es'>({
		key: "app-locale",
		defaultValue: "en",
	});

	return { currentLocale, setCurrentLocale };
};
