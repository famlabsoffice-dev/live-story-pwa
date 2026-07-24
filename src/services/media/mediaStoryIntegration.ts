export interface MediaStoryLink {
  mediaId: string;
  storyId: string;
  chapterId?: string;
  memoryId?: string;
}

export class MediaStoryIntegration {
  private links = new Map<string, MediaStoryLink>();

  async attach(link: MediaStoryLink) {
    this.links.set(link.mediaId, link);
    return link;
  }

  async get(mediaId: string) {
    return this.links.get(mediaId) ?? null;
  }
}
