export const dataCategories = {
  identity: ['name', 'birthDate', 'contact'],
  story: ['memories', 'chapters', 'interviews'],
  media: ['images', 'audio', 'video'],
  ai: ['transcripts', 'generatedContent'],
} as const;

export type DataCategory = keyof typeof dataCategories;
