import { ICON_MAP } from "@/shared/lib";
import type { IconType } from "@/shared/types";

interface IconProps {
	icon: IconType;
	size?: number;
	className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, size = 20, className }) => {
	const emoji = ICON_MAP[icon];

	return (
		<span
			className={className}
			style={{
				fontSize: size,
				lineHeight: 1,
				display: "inline-block",
			}}
			role='img'
			aria-label={icon}
		>
			{emoji}
		</span>
	);
};
