import type { Decorator, Preview } from "@storybook/react-vite";
import { ThemeProvider } from "../src/shared/providers";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/shared/assets/index.css";
import "../src/shared/assets/_zeroing.scss";
import "../src/shared/assets/_global.scss";

const withThemeProvider: Decorator = (Story, context) => {
	const theme = (context.globals as { theme?: string }).theme || "system";

	return (
		<div className='w-full h-full bg-background text-foreground'>
			<ThemeProvider
				defaultTheme={theme as "light" | "dark" | "system"}
				storageKey='_ui-theme'
			>
				<Story />
			</ThemeProvider>
		</div>
	);
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: {
			name: "Theme",
			description: "Global theme for components",
			defaultValue: "light",
			toolbar: {
				icon: "circlehollow",
				items: [
					{ value: "light", title: "Light", icon: "sun" },
					{ value: "dark", title: "Dark", icon: "moon" },
					{ value: "system", title: "System", icon: "desktop" },
				],
				showName: true,
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		withThemeProvider,
		withThemeByClassName({
			themes: {
				light: "light",
				dark: "dark",
				system: "system",
			},
			defaultTheme: "light",
		}),
	],
};

export default preview;
