import { Trash2 } from "lucide-react";

interface RemoveButtonProps {
  onClick: () => void;
  label?: string;
}

export default function RemoveButton({
  onClick,
  label = "Remove item",
}: RemoveButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-destructive"
      aria-label={label}
    >
      <Trash2 className="size-4" />
    </button>
  );
}
