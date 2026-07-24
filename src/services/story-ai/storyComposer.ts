import type { StoryChapter } from "./chapterBuilder";

export function composeStory(chapters: StoryChapter[]): string {
  return chapters
    .map((chapter) => `${chapter.title}\n${chapter.events.map((e) => e.text).join(" ")}`)
    .join("\n\n");
}
