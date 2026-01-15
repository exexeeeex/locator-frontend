import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-links",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				"@shared": join(__dirname, "../src/shared"),
				"@entities": join(__dirname, "../src/entities"),
				"@features": join(__dirname, "../src/features"),
				"@widgets": join(__dirname, "../src/widgets"),
				"@pages": join(__dirname, "../src/pages"),
				"@app": join(__dirname, "../src/app"),
			};
		}
		return config;
	},
};
export default config;
