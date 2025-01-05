export function createHttpClient(baseUrl: string) {
	return {
		async get<ApiResponse>(endpoint: string) {
			const response = await fetch(`${baseUrl}${endpoint}`, {
				method: "GET",
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			return (await response.json()) as ApiResponse;
		},
	};
}
