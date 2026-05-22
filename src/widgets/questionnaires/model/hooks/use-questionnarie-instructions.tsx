import { Modal } from "@/shared/components";
import { useState } from "react";

type Step = "info" | "swipe";

export const useQuestionnarieInstructions = () => {
	const [steps, setSteps] = useState<Step>("info");
	const [open, setOpen] = useState<boolean>(
		localStorage.getItem("_instructions") === "true" ? false : true,
	);

	const handleAcceptInstructions = () => {
		localStorage.setItem("_instructions", "true");
		setOpen(!open);
	};

	const handleChangeStep = () => setSteps(steps === "info" ? "swipe" : "info");

	const handleCreateInstructions = (): Record<Step, React.ReactNode> => {
		const instructions: Record<Step, React.ReactNode> = {
			info: (
				<Modal
					open={open}
					onOpenChange={() => setOpen(!open)}
					trigger={undefined}
					buttonProps={"Следующая инструкция"}
					action={handleChangeStep}
					classNames={{
						content: "bg-card w-[100%]",
					}}
				>
					<div className='flex items-center justify-center flex-col'>
						<img
							src='https://github.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/blob/main/People/Backhand%20Index%20Pointing%20Down.webp?raw=true'
							className='w-30 h-30'
						/>
						<p className='text-center mt-2 w-full font-semibold text-lg'>
							Нажмите на фотографию, чтобы скрыть или показать блок с
							информацией
						</p>
					</div>
				</Modal>
			),
			swipe: (
				<Modal
					open={open}
					onOpenChange={() => setOpen(!open)}
					trigger={undefined}
					buttonProps={"Понятно"}
					action={handleAcceptInstructions}
					classNames={{
						content: "bg-card w-[100%]",
					}}
				>
					<div className='flex items-center justify-center flex-col'>
						<img
							src='https://github.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/blob/main/Objects/Mobile%20Phone.webp?raw=true'
							className='w-30 h-30'
						/>
						<p className='text-center mt-2 w-full font-semibold text-lg'>
							При скрытом блоке, свайпните по экрану, чтобы посмотреть другие
							фотографии.
						</p>
					</div>
				</Modal>
			),
		};
		return instructions;
	};

	const handleRenderButtons = () => {
		return handleCreateInstructions()[steps];
	};

	return {
		handleChangeStep,
		handleRenderButtons,
	};
};
