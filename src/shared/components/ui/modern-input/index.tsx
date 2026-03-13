import { cn } from "@/shared/lib/utils";
import type { IconType } from "@/shared/types";
import { forwardRef } from "react";
import { Icon } from "../icon";

interface ModernInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: IconType;
}

export const ModernInput = forwardRef<HTMLInputElement, ModernInputProps>(
	({ className, icon, ...props }, ref) => (
		<div className='group relative'>
			{icon && (
				<div className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 transition-colors duration-300 group-focus-within:text-primary'>
					<Icon
						icon={icon}
						size={20}
						color={"var(--primary)"}
						fill={"var(--primary)"}
						stroke={"var(--primary)"}
					/>
				</div>
			)}
			<input
				ref={ref}
				className={cn(
					"relative z-10 h-14 w-full rounded-2xl",
					"text-[15px] placeholder:text-muted-foreground/40",
					"outline-none transition-all duration-300",
					icon ? "pl-12 pr-4" : "px-4",

					"bg-foreground/2 border border-foreground/6",

					"hover:bg-foreground/4 hover:border-primary/50",

					"focus:bg-foreground/2 focus:border-primary",
					"focus:ring-[3px] focus:ring-primary/10",

					className,
				)}
				{...props}
			/>

			<div className='pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-primary/4 via-transparent to-secondary/4 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100' />
		</div>
	),
);
