export interface LifeBookChapterExport {
  id: string;
  title: string;
  content: string;
  imageUrls: string[];
}

export interface LifeBookExportDocument {
  title: string;
  author?: string;
  coverImageUrl?: string;
  chapters: LifeBookChapterExport[];
  generatedAt: string;
}

export type ExportFormat = 'pdf' | 'digital-book';
