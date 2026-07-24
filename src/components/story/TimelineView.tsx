import type { TimelineSection } from '@/domain/presentation/timeline';

interface TimelineViewProps {
  sections: TimelineSection[];
}

export function TimelineView({ sections }: TimelineViewProps) {
  return (
    <section className="space-y-8" aria-label="Lebenszeitleiste">
      {sections.map((section) => (
        <div key={section.label} className="space-y-3">
          <h2 className="text-2xl font-bold">{section.label}</h2>
          {section.events.map((event) => (
            <article key={event.id} className="rounded-2xl border p-5">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              {event.description && <p className="mt-2 text-lg">{event.description}</p>}
            </article>
          ))}
        </div>
      ))}
    </section>
  );
}
