import type { MediaPresentationItem } from '@/domain/media/mediaPresentation';

interface MediaGalleryProps {
  items: MediaPresentationItem[];
}

export function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2" aria-label="Mediengalerie">
      {items.map((item) => (
        <article key={item.id} className="rounded-2xl border p-5" tabIndex={0}>
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="mt-2 text-lg">{item.description}</p>
        </article>
      ))}
    </section>
  );
}
