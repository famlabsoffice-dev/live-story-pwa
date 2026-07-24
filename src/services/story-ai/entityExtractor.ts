export interface StoryEntity { type: 'person' | 'place' | 'time'; value: string; }

export function extractEntities(text: string): StoryEntity[] {
  return text.split(/\s+/).filter(Boolean).map(value => ({ type: 'person', value }));
}
