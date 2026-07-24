import type { LifeBookExportDocument } from '@/domain/export/lifeBookExport';

interface LifeBookPreviewProps {
  document: LifeBookExportDocument;
}

export function LifeBookPreview({ document }: LifeBookPreviewProps) {
  return (
    <article className="space-y-6 rounded-2xl border p-6">
      <h1 className="text-3xl font-bold">{document.title}</h1>
      {document.chapters.map((chapter) => (
        <section key={chapter.id} className="space-y-2">
          <h2 className="text-2xl font-semibold">{chapter.title}</h2>
          <p className="text-lg leading-relaxed">{chapter.content}</p>
        </section>
      ))}
    </article>
  );
}
