import type { IconType } from "@/shared/types";
import { Icon, Input } from "..";
import { forwardRef } from "react";

interface ImageInputProps extends React.ComponentProps<typeof Input> {
	icon: IconType;
	iconSize?: number;
	iconPosition?: "left" | "right";
}

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(({ className = "", icon, iconSize = 20, iconPosition = "left", ...props }, ref) => {
	const isIconLeft = iconPosition === "left";

	return (
		<div className='relative'>
			<Icon
				icon={icon}
				className={`
						absolute top-1/2 -translate-y-1/2
						${isIconLeft ? "left-3" : "right-3"}
						text-muted-foreground/70
						pointer-events-none
					`}
				size={iconSize}
				fill='transparent'
				stroke='currentColor'
				color={"currenColor"}
			/>
			<Input
				ref={ref}
				className={`
						h-12 px-11 text-[15px]
						rounded-2xl
						bg-input/50
						border border-border
						focus:bg-card
						focus:border-primary/50
						focus:ring-2 focus:ring-primary/20
						transition-all duration-200
						placeholder:text-muted-foreground/60
						${className}
					`}
				style={{
					paddingLeft: isIconLeft ? "3rem" : "1rem",
					paddingRight: isIconLeft ? "1rem" : "3rem",
				}}
				{...props}
			/>
		</div>
	);
});

ImageInput.displayName = "ImageInput";

export { ImageInput };
