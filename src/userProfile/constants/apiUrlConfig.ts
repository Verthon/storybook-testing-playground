const baseUrl = import.meta.env.VITE_USER_API_URL;

export const apiUrlConfig = {
	baseUrl,
	userEndpoint: 'api/user',
} as const;
