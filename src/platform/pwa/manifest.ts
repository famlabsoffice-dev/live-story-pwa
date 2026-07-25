export interface PWAConfiguration {
  name: string;
  shortName: string;
  description: string;
  display: "standalone";
  offlineEnabled: boolean;
}

export const liveStoryManifest: PWAConfiguration = {
  name: "Live Story",
  shortName: "LiveStory",
  description: "Every Life Matters - digital life story archive.",
  display: "standalone",
  offlineEnabled: true,
};
