export interface Contradiction { field: string; values: string[]; }

export function detectContradictions(values: string[]): Contradiction[] {
 const unique = [...new Set(values)];
 return unique.length > 1 ? [{ field: 'memory', values: unique }] : [];
}
