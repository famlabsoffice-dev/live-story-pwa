import { renderStoryPdf, type PdfRenderOptions } from './pdfRenderer'

export function exportStoryAsPdf(options: PdfRenderOptions) {
  return renderStoryPdf(options)
}
