import { devices } from '@playwright/test';

export const deviceMatrix = {
  redmiNote8Pro: {
    ...devices['Desktop Chrome'],
    name: 'Redmi Note 8 Pro',
    viewport: { width: 393, height: 851 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  },
  iPhoneSafari: {
    ...devices['iPhone 15 Pro'],
    name: 'iPhone Safari',
  },
  tablet: {
    ...devices['iPad (gen 7)'],
    name: 'Tablet',
  },
  desktop: {
    ...devices['Desktop Chrome'],
    name: 'Desktop',
  },
} as const;
