import type { DigitalLifeBook } from '@/domain/presentation/storyPresentation';

interface Props {
  book: DigitalLifeBook;
}

export function DigitalLifeBookRenderer({ book }: Props) {
  return (
    <section aria-label={book.title}>
      <h1>{book.title}</h1>
      {book.chapters.map((chapter) => (
        <article key={chapter.id}>
          <h2>{chapter.title}</h2>
          {chapter.summary && <p>{chapter.summary}</p>}
        </article>
      ))}
    </section>
  );
}
