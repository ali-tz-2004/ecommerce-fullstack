import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type PrimaryActionButtonProps = ComponentProps<typeof Button>;

export default function PrimaryActionButton({
  className,
  children,
  ...props
}: PrimaryActionButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-primary/30 transition-colors",
        "dark:hover:text-foreground",
        "hover:cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
