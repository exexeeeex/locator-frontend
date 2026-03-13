import { cn } from "@/shared/lib/utils";
import { Label } from "../label";

type FieldGroupProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  hint?: string;
};

export const FieldGroup: React.FC<FieldGroupProps> = ({
  label,
  error,
  children,
  className,
  hint,
}) => (
  <div className={cn("space-y-2.5", className)}>
    <div className="flex items-baseline justify-between">
      <Label className="text-[14px] font-medium tracking-wide text-foreground/80 uppercase">
        {label}
      </Label>
      {hint && <span className="text-xs text-muted-foreground/50">{hint}</span>}
    </div>
    {children}
    {error && (
      <p className="flex items-center gap-1.5 text-[13px] text-rose-400 animate-in slide-in-from-top-1 fade-in duration-200">
        <span className="inline-block h-1 w-1 rounded-full bg-rose-400" />
        {error}
      </p>
    )}
  </div>
);
