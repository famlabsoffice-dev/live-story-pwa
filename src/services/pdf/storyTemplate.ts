export interface StoryTemplateData {
  title: string
  chapters: string[]
}

export function createStoryTemplate(data: StoryTemplateData) {
  return {
    cover: data.title,
    chapters: data.chapters,
  }
}
