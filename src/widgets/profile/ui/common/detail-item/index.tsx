import { Icon } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import type { IconType } from "@/shared/types";

type Props = {
	icon: IconType;
	title: string;
	value: string;
	className?: string;
};

export const DetailItem: React.FC<Props> = ({
	icon,
	title,
	value,
	className,
}) => {
	return (
		<div
			className={cn(
				className,
				"group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4",
				"transition-all duration-300",
				"border border-card/30 bg-card/40 hover:bg-white/6 hover:border-white/10",
			)}
		>
			<div className='absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

			<div
				className={cn(
					"relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
					"border border-primary/10 bg-primary/10",
					"transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]",
				)}
			>
				<Icon
					icon={icon}
					size={22}
					className='text-foreground opacity-80 transition-opacity group-hover:opacity-100'
				/>
			</div>

			<div className='relative z-10 flex flex-col justify-center gap-0.5 overflow-hidden'>
				<span className='text-[13px] font-medium text-muted-foreground transition-colors group-hover:text-foreground/70'>
					{title}
				</span>
				<span className='truncate text-[15px] font-semibold tracking-tight text-foreground/90'>
					{value}
				</span>
			</div>
		</div>
	);
};
