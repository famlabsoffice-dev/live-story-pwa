export interface TimelineEntry {
  year: number
  text: string
}

export function buildTimelineLayout(entries: TimelineEntry[]) {
  return entries.sort((a, b) => a.year - b.year)
}
