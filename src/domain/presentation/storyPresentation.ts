export interface TimelineEntry {
  id: string;
  date?: string;
  title: string;
  description?: string;
  chapterId?: string;
}

export interface PresentationChapter {
  id: string;
  title: string;
  summary?: string;
  timeline: TimelineEntry[];
  mediaIds: string[];
}

export interface DigitalLifeBook {
  id: string;
  title: string;
  chapters: PresentationChapter[];
  createdAt: string;
}
