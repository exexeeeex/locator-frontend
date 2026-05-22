import { cn } from "@/shared/lib/utils";
import type { HtmlHTMLAttributes } from "react";

interface GlassCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
	variant?: "default" | "elevated" | "subtle";
	glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
	children,
	className,
	variant = "default",
	glow = false,
	...props
}) => {
	const variants = {
		default: [
			"bg-white/60 border-white/50",
			"dark:bg-white/[0.12] dark:border-white/[0.10]",
		].join(" "),
		elevated: [
			"bg-white/80 border-white/60",
			"dark:bg-white/[0.15] dark:border-white/[0.14]",
		].join(" "),
		subtle: [
			"bg-white/50 border-white/25",
			"dark:bg-white/[0.08] dark:border-white/[0.06]",
		].join(" "),
	};

	return (
		<div
			className={cn(
				"relative rounded-3xl border p-6",

				"backdrop-blur-2xl backdrop-saturate-150",

				"transition-colors",
				"duration-300 ease-out",

				"will-change-transform translate-z-0",

				[
					"shadow-[0_2px_16px_-4px_rgba(240,80,140,0.10),",
					"0_8px_30px_-8px_rgba(160,80,200,0.08)]",
				].join(""),
				[
					"dark:shadow-[0_2px_16px_-4px_rgba(240,80,140,0.12),",
					"0_8px_30px_-8px_rgba(160,80,200,0.10)]",
				].join(""),

				["0_16px_48px_-12px_rgba(160,80,200,0.14)]"].join(""),
				[
					"dark:hover:shadow-[0_4px_24px_-4px_rgba(240,80,140,0.24),",
					"0_16px_48px_-12px_rgba(160,80,200,0.18)]",
				].join(""),


				variants[variant],

				"after:pointer-events-none after:absolute after:inset-x-4 after:top-0",
				"after:h-px after:bg-gradient-to-r",
				"after:from-transparent after:via-white/70 after:to-transparent",
				"dark:after:via-white/15",
				"after:rounded-t-3xl",

				glow && [
					"before:pointer-events-none before:absolute before:-inset-2 before:-z-10",
					"before:rounded-[1.75rem] before:opacity-40",
					"before:bg-gradient-to-br before:from-primary/50 before:via-secondary/15 before:to-accent/80",
					"before:blur-2xl",
					"hover:before:opacity-60",
					"before:transition-opacity before:duration-500",
				],

				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};
