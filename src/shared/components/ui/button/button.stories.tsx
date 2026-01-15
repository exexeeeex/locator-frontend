import { Button } from "./button";
import type { Meta, StoryObj } from "@storybook/react";

type ButtonProps = React.ComponentProps<typeof Button>;

const meta: Meta = {
	title: "shared/button",
	component: Button,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "Кнопка с различными вариантами стилей и размеров. Поддерживает все стандартные свойства button.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "desctructive", "outline", "secondary"] as const,
			description: "Варианты стиля кнопки",
			table: {
				type: { summary: "'default' | 'destructive' | 'outline' | 'secondary'" },
				defaultValue: { summary: "default" },
			},
		},
		size: {
			control: "select",
			options: ["default", "lg", "sm", "md", "icon"] as const,
			description: "Размер кнопки",
			table: {
				type: { summary: "'default' | 'sm' | 'lg' | 'md' | 'icon" },
				defaultValue: { summary: "default" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Состояние disabled",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		asChild: {
			control: "boolean",
			description: "Использовать для рендеринга другого компонента",
			table: {
				type: { summary: "boolean" },
			},
		},
		children: {
			control: "text",
			description: "Содержимое кнопки",
			table: {
				type: { summary: "React.ReactNode" },
			},
		},
		onClick: {
			description: "Обработчик события клика",
			table: {
				type: { summary: "(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void" },
			},
		},
		className: {
			control: "text",
			description: "Дополнительные классы для кастомизации стилей",
			table: {
				type: { summary: "string" },
			},
		},
	},
	args: {
		onClick: () => alert("Button clicked!"),
		children: "Button",
		variant: "default",
		size: "default",
		disabled: false,
		asChild: false,
	} as ButtonProps,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "default",
	} as ButtonProps,
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
	} as ButtonProps,
};

export const Outline: Story = {
	args: {
		variant: "outline",
	} as ButtonProps,
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	} as ButtonProps,
};

export const Small: Story = {
	args: {
		size: "sm",
	} as ButtonProps,
};

export const Large: Story = {
	args: {
		size: "lg",
	} as ButtonProps,
};

export const IconButton: Story = {
	args: {
		size: "icon",
		children: <span>🔍</span>,
		variant: "default",
	} as ButtonProps,
	parameters: {
		docs: {
			description: {
				story: "Кнопка в виде иконки, используемая для компактных действий, таких как поиск или закрытие модальных окон.",
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled Button",
		variant: "default",
		size: "default",
	} as ButtonProps,
};
