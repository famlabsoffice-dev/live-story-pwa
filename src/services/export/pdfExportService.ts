import type { LifeBookExportDocument } from '@/domain/export/lifeBookExport';
import { renderLifeBookMarkdown } from './lifeBookRenderer';

export interface PdfExportResult {
  filename: string;
  content: string;
}

export function exportLifeBookToPdfSource(document: LifeBookExportDocument): PdfExportResult {
  return {
    filename: `${document.title}.pdf`,
    content: renderLifeBookMarkdown(document),
  };
}
