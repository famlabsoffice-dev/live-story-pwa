export type MemoryTriggerType = "person" | "place" | "time" | "event";

export interface MemoryTrigger {
  type: MemoryTriggerType;
  value: string;
}

export function detectMemoryTriggers(text: string): MemoryTrigger[] {
  const triggers: MemoryTrigger[] = [];

  const patterns: Array<[MemoryTriggerType, RegExp]> = [
    ["time", /\b(19|20)\d{2}\b/g],
    ["place", /\b(?:in|nach|bei)\s+([A-ZÄÖÜ][\wÄÖÜäöü-]+)/g],
  ];

  for (const [type, pattern] of patterns) {
    for (const match of text.matchAll(pattern)) {
      triggers.push({ type, value: match[0] });
    }
  }

  return triggers;
}
