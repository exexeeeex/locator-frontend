import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../drawer";
import { Button } from "../button";
import { cn } from "../../../lib/utils";

type Props = {
	trigger: React.ReactNode;
	title?: string;
	children: React.ReactNode;
	classNames?: Partial<{
		container: string;
		content: string;
		header: string;
		title: string;
		trigger: string;
		action: string;
	}>;

	closeAction?: () => void;
	disabled?: boolean;
};

export const DrawerWindow: React.FC<Props> = ({
	trigger,
	title,
	children,
	classNames,

	closeAction,
}) => {
	return (
		<Drawer>
			<DrawerTrigger
				asChild
				className={cn(classNames?.trigger)}
			>
				{trigger}
			</DrawerTrigger>

			<DrawerContent
				className={cn(
					`
                      rounded-t-2xl
                      border-none
                      bg-card/90
                      shadow-lg
                      w-[calc(100%-30px)]
                      mx-auto
                      mt-auto
                      px-5 pt-5 pb-6
                      flex flex-col
                    `,
					classNames?.container,
				)}
			>
				{title && (
					<DrawerHeader className={cn("px-0 pb-3", classNames?.header)}>
						<DrawerTitle
							className={cn(
								"text-lg font-semibold text-center",
								classNames?.title,
							)}
						>
							{title}
						</DrawerTitle>
					</DrawerHeader>
				)}

				<div className={cn("flex-1 overflow-y-auto", classNames?.content)}>
					{children}
				</div>

				<DrawerFooter className='px-0 pt-4 flex flex-col gap-2'>
					<DrawerClose asChild>
						<Button
							variant='outline'
							onClick={closeAction}
							className='w-full text-muted-foreground'
						>
							Закрыть
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
