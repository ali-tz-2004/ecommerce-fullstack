import { SectionTitleProps } from "./section-title.types";

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold">{title}</h2>

      {description && (
        <p className="mt-2 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
