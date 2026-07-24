export interface StoryTimelineItem {
  id: string;
  year?: number;
  title: string;
  description?: string;
  mediaIds: string[];
}

export interface ChapterViewModel {
  id: string;
  title: string;
  order: number;
  content: string;
  timeline: StoryTimelineItem[];
}

export interface LifeBookDocument {
  storyId: string;
  title: string;
  chapters: ChapterViewModel[];
  generatedAt: string;
}
