import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "info";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200",
    success: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    warning: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
    info: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
