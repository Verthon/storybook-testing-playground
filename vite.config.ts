/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	// @ts-expect-error kek
	test: {
		environment: "happy-dom",
		clearMocks: true,
    globals: true,
		setupFiles: ['./src/test/setup.ts']
	},
	appType: "spa",
});
