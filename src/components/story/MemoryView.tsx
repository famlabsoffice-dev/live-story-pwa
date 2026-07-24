import type { MemoryViewModel } from '@/domain/media/mediaPresentation';

interface MemoryViewProps {
  memory: MemoryViewModel;
}

export function MemoryView({ memory }: MemoryViewProps) {
  return (
    <article className="space-y-4 rounded-2xl border p-6">
      <h1 className="text-3xl font-semibold">{memory.title}</h1>
      <p className="text-lg leading-relaxed">{memory.text}</p>
      {memory.audioMediaId && (
        <p className="text-lg">Audio-Erinnerung verfügbar</p>
      )}
    </article>
  );
}
