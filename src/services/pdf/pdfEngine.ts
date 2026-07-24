export interface PdfChapter {
  title: string;
  content: string;
}

export interface PdfStoryDocument {
  title: string;
  author?: string;
  chapters: PdfChapter[];
}

export interface PdfExportOptions {
  includeMetadata?: boolean;
}

export class PdfEngine {
  generateHtml(document: PdfStoryDocument, options: PdfExportOptions = {}): string {
    const metadata = options.includeMetadata
      ? '<meta name="generator" content="Live Story PDF Engine">'
      : '';

    const chapters = document.chapters
      .map(
        (chapter) =>
          `<section><h2>${this.escape(chapter.title)}</h2><p>${this.escape(chapter.content)}</p></section>`,
      )
      .join('');

    return `<!doctype html><html><head>${metadata}<title>${this.escape(document.title)}</title></head><body><h1>${this.escape(document.title)}</h1>${document.author ? `<h3>${this.escape(document.author)}</h3>` : ''}${chapters}</body></html>`;
  }

  async export(document: PdfStoryDocument, options?: PdfExportOptions): Promise<Blob> {
    const html = this.generateHtml(document, options);
    return new Blob([html], { type: 'text/html;charset=utf-8' });
  }

  private escape(value: string): string {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
}

export const pdfEngine = new PdfEngine();
