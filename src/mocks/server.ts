export const enableMockServer = async () => {

	if (
		import.meta.env.MODE === "production" ||
		import.meta.env.VITE_API_MOCK === "false"
	) {
		return;
	}

	const { worker } = await import("./worker");

	return worker.start({
		onUnhandledRequest: "warn",
	});
};
