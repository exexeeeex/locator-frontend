import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@shared/lib/utils";
import { buttonVariants, type ButtonVariants } from "./variant";

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	disabled,
	...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot='button'
			data-variant={variant}
			data-size={size}
			disabled={disabled}
			className={cn(
				"rounded-2xl",
				buttonVariants({ variant, size, className }),
			)}
			{...props}
		/>
	);
}

export { Button };
