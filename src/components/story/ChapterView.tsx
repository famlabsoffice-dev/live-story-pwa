interface ChapterViewProps {
  title: string;
  content: string;
}

export function ChapterView({ title, content }: ChapterViewProps) {
  return (
    <article className="space-y-4 rounded-2xl p-6 text-lg leading-relaxed">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>{content}</p>
    </article>
  );
}
