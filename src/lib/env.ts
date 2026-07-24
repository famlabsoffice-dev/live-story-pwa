function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing environment variable: ${name}`);
    }
    console.warn(`Missing environment variable: ${name}`);
    return '';
  }

  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  isPWA: process.env.NEXT_PUBLIC_IS_PWA === 'true',
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
  get requiredExample() {
    return requiredEnv("LIVE_STORY_EXAMPLE");
  },
};

export const isDev = env.nodeEnv === 'development';
export const isProd = env.nodeEnv === 'production';
