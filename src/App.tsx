import { useLocale } from "./i18n/useLocale";
import { AppLayout } from "./ui/layouts/AppLayout";

function App() {
	const { t } = useLocale();

	return (
		<AppLayout>
			<p>{t("greeting", { name: 'M' })}</p>
		</AppLayout>
	);
}

export default App;
