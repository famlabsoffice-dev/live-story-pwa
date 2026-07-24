import type { LifeBookExportDocument } from '@/domain/export/lifeBookExport';

export function renderLifeBookMarkdown(document: LifeBookExportDocument): string {
  const chapters = document.chapters
    .map((chapter) => `## ${chapter.title}\n\n${chapter.content}`)
    .join('\n\n');

  return `# ${document.title}\n\n${chapters}`;
}

export function createExportFilename(title: string): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-lebensbuch`;
}
