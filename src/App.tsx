import { useLocale } from "./i18n/useLocale";

function App() {
	const { t } = useLocale();

	return <p>{t("greeting", { name: "M" })}</p>;
}

export default App;
