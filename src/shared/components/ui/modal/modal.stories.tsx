import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { Button } from "../button";
import { useState } from "react";

type ModalProps = React.ComponentProps<typeof Modal>;

const meta: Meta = {
	title: "shared/modal",
	component: Modal,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "Модальное окно",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
			description: "Содержимое модального окна",
			table: {
				type: { summary: "React.ReactNode" },
			},
		},
		trigger: {
			control: "text",
			description: "Триггер для открытия модального окна",
			table: {
				type: { summary: "React.ReactNode" },
			},
		},
		buttonProps: {
			control: "text",
			description: "Содержимое кнопки действия",
			table: {
				type: { summary: "string" },
			},
		},
		action: {
			control: false,
			description: "Функция для кнопки действия",
			table: {
				type: { summary: "() => void" },
			},
		},
		onOpenChange: {
			description: "Обработчик события клика по триггеру",
			table: {
				type: { summary: "(open: boolean) => void" },
			},
		},
		open: {
			control: "boolean",
			description: "Состояние модального окна (открыто | закрыто)",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
	args: {
		onOpenChange: () => {},
		title: "Заголовок модального окна",
		description: "Описание модального окна",
		children: "Содержимое модального окна",
		open: false,
		trigger: <Button>Открыть модальное окно</Button>,
		buttonProps: "Применить",
		action: () => alert("Кнопка действия нажата"),
	} as ModalProps,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render(args) {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<Modal
				{...args}
				open={isOpen}
				onOpenChange={setIsOpen}
				trigger={<Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>}
				children={<h1>Содержимое модального окна</h1>}
				buttonProps='Применить'
				action={() => {
					alert("Кнопка действия нажата");
					setIsOpen(false);
				}}
			/>
		);
	},
};
