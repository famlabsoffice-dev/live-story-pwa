import type { LifeBookDocument } from '@/domain/presentation/storyView';

export function renderLifeBook(document: LifeBookDocument): string {
  const chapters = document.chapters
    .map((chapter) => `## ${chapter.title}\n\n${chapter.content}`)
    .join('\n\n');

  return `# ${document.title}\n\n${chapters}`;
}
