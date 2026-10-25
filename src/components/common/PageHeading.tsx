type PageHeadingProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHeading({ eyebrow, title, intro }: PageHeadingProps) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-intro">{intro}</p>
    </header>
  );
}
