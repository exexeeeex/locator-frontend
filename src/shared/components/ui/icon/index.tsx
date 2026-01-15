import { ICON_MAP } from "@/shared/lib";
import type { IconType } from "@/shared/types";

interface NavigationIconProps {
	icon: IconType;
	size: number;
	color: string;
	fill: string;
	stroke: string;
	className?: string;
}

export const Icon: React.FC<NavigationIconProps> = ({
	icon,
	size,
	color,
	fill,
	stroke,
	className,
}) => {
	const IconComponent = ICON_MAP[icon];

	return (
		<div>
			<IconComponent
				stroke={stroke}
				className={className}
				size={size}
				color={color}
				fill={fill}
				aria-label={icon}
			/>
		</div>
	);
};
