export function calculateConfidence(factors: number[]): number {
 if (!factors.length) return 0;
 return Math.max(0, Math.min(1, factors.reduce((a,b)=>a+b,0)/factors.length));
}
