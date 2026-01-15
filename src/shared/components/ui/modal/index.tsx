import { cn } from "@/shared/lib/utils";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../dialog";
import { Button } from "../button";

type Props = {
	trigger: React.ReactNode;
	title?: string;
	description?: string;
	children: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;

	className?: string;
	contentClassName?: string;
	headerClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	triggerClassName?: string;

	buttonProps: string;
	action: () => void;
	closeAction?: () => void;
};

export const Modal: React.FC<Props> = ({
	trigger,
	title,
	description,
	children,
	open,
	onOpenChange,

	className,
	contentClassName,
	headerClassName,
	titleClassName,
	descriptionClassName,
	triggerClassName,

	buttonProps,
	action,
	closeAction,
}) => {
	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<DialogTrigger
				asChild
				className={cn(triggerClassName)}
			>
				{trigger}
			</DialogTrigger>

			<DialogContent
				className={cn(
					`
                        max-w-95
                        rounded-3xl
                        bg-card/85 backdrop-blur-xl
                        border border-border/40
                        p-6
                    `,
					contentClassName,
				)}
			>
				{(title || description) && (
					<DialogHeader className={cn("items-start gap-1 ", headerClassName)}>
						{title && <DialogTitle className={cn("text-[17px] font-semibold tracking-tight", titleClassName)}>{title}</DialogTitle>}

						{description && (
							<DialogDescription className={cn("text-[15px] text-muted-foreground leading-relaxed", descriptionClassName)}>
								{description}
							</DialogDescription>
						)}
					</DialogHeader>
				)}

				<div className={cn(className)}>{children}</div>

				<DialogFooter className='flex flex-col gap-3 '>
					<Button
						onClick={action}
						className='
                          w-full h-12
                          rounded-2xl
                          text-[16px] font-semibold
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
                                bg-muted/40
                                border-border/40
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
