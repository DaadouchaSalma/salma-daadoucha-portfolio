type ProjectSectionHeaderProps = {
  title: string;
  description: string;
};

export function ProjectSectionHeader({
  title,
  description,
}: ProjectSectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

      <p className="mt-2 leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}
