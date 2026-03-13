import { cn } from "@/shared/lib/utils";
import type { IconType } from "@/shared/types";
import { Icon } from "..";

type SectionHeaderProps = {
  icon: IconType;
  label: string;
  description?: string;
  gradient?: string;
  className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  label,
  description,
  gradient = "from-primary to-violet-500",
  className,
}) => (
  <div className={cn("mb-6 flex items-center gap-3.5", className)}>
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl",
        "bg-linear-to-br shadow-lg",
        gradient,
      )}
    >
      <Icon
        icon={icon}
        size={18}
        color={"white"}
        fill={"white"}
        stroke={"white"}
      />
    </div>
    <div className="space-y-0.5 ">
      <h3 className="text-lg font-semibold tracking-tight">{label}</h3>
    </div>
  </div>
);
