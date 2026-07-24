export function pseudonymize(identifier: string): string {
  return `anon_${identifier
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')}`;
}
