export interface MediaLink {
  mediaId: string;
  storyId?: string;
  chapterId?: string;
  memoryId?: string;
  personId?: string;
}

export function createMediaLink(input: MediaLink): MediaLink {
  return input;
}
