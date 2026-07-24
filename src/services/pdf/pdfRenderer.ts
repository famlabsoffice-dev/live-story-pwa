export interface PdfRenderOptions {
  title: string
  author?: string
}

export interface PdfDocumentResult {
  filename: string
  createdAt: string
}

export function renderStoryPdf(options: PdfRenderOptions): PdfDocumentResult {
  return {
    filename: `${options.title}.pdf`,
    createdAt: new Date().toISOString(),
  }
}
