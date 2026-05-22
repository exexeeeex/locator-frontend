import { cn } from "@/shared/lib/utils";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../dialog";
import { Button } from "../button";

type Props = {
	trigger: React.ReactNode;
	title?: string;
	description?: string;
	children: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;

	classNames?: Partial<{
		container: string;
		content: string;
		header: string;
		title: string;
		description: string;
		trigger: string;
	}>;

	buttonProps: string;
	action: () => void;
	closeAction?: () => void;

	disabled?: boolean;
};

export const Modal: React.FC<Props> = ({
	trigger,
	title,
	description,
	children,
	open,
	onOpenChange,

	classNames,

	buttonProps,
	action,
	closeAction,

	disabled,
}) => {
	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<DialogTrigger
				asChild
				className={cn(classNames?.trigger)}
			>
				{trigger}
			</DialogTrigger>

			<DialogContent
				className={cn(
					`
    				max-w-[95vw]
    				w-full
    				overflow-hidden
    				rounded-3xl
    				bg-card/20 backdrop-blur-xl
    				border border-border/40
    				p-6
    				`,
					classNames?.content,
				)}
			>
				{(title || description) && (
					<DialogHeader
						className={cn("items-start gap-1 ", classNames?.header)}
					>
						{title && (
							<DialogTitle
								className={cn(
									"text-[17px] font-semibold tracking-tight",
									classNames?.title,
								)}
							>
								{title}
							</DialogTitle>
						)}

						{description && (
							<DialogDescription
								className={cn(
									"text-[15px] text-muted-foreground leading-relaxed",
									classNames?.description,
								)}
							>
								{description}
							</DialogDescription>
						)}
					</DialogHeader>
				)}

				<div
					className={cn(
						classNames?.content,
						"max-w-full min-w-0 wrap-break-word whitespace-pre-wrap",
					)}
				>
					{children}
				</div>

				<DialogFooter className='flex flex-col gap-3 '>
					<Button
						disabled={disabled}
						onClick={action}
						className='
                          w-full h-12
                          rounded-2xl
                          text-[16px] font-semibold
						  bg-primary/90
						  backdrop-blur-xl
						  text-foreground
                          shadow-sm
                        '
					>
						{buttonProps}
					</Button>

					<DialogClose asChild>
						<Button
							onClick={closeAction}
							variant='outline'
							className='
                                w-full h-12
                                rounded-2xl
                                border-border/40
								bg-muted/90
                                text-[16px]
                            '
						>
							Закрыть
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
