export interface TimelineEvent {
  id: string;
  year?: number;
  date?: string;
  title: string;
  description?: string;
  locationId?: string;
  personIds: string[];
  mediaIds: string[];
}

export interface TimelineSection {
  year: number | null;
  label: string;
  events: TimelineEvent[];
}
