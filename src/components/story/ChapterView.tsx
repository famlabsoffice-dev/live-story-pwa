import type { PresentationChapter } from '@/domain/presentation/storyPresentation';

interface ChapterViewProps {
  chapter: PresentationChapter;
}

export function ChapterView({ chapter }: ChapterViewProps) {
  return (
    <article aria-label={chapter.title} className="space-y-4 rounded-2xl p-6 text-lg leading-relaxed">
      <h1 className="text-3xl font-semibold">{chapter.title}</h1>
      {chapter.summary && <p>{chapter.summary}</p>}
      <div>
        {chapter.timeline.map((item) => (
          <section key={item.id}>
            <h2>{item.title}</h2>
            {item.description && <p>{item.description}</p>}
          </section>
        ))}
      </div>
    </article>
  );
}
