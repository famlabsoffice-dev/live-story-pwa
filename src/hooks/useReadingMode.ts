import { useState } from 'react';

export function useReadingMode() {
  const [largeText, setLargeText] = useState(false);

  return {
    largeText,
    increaseText: () => setLargeText(true),
    decreaseText: () => setLargeText(false),
  };
}
