export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Story extends BaseEntity {
  title: string;
  description?: string;
}

export interface Person extends BaseEntity {
  storyId: string;
  firstName: string;
  lastName: string;
  birthDate?: Date;
}

export interface Chapter extends BaseEntity {
  storyId: string;
  title: string;
  content?: string;
  order: number;
}

export interface Interview extends BaseEntity {
  storyId: string;
  question?: string;
  transcript?: string;
}

export interface Memory extends BaseEntity {
  storyId: string;
  title: string;
  content?: string;
  date?: Date;
}

export interface Media extends BaseEntity {
  storyId: string;
  type: "image" | "audio" | "video" | "document";
  url: string;
}

export interface Place extends BaseEntity {
  name: string;
  latitude?: number;
  longitude?: number;
}

export interface Tag extends BaseEntity {
  name: string;
}

export interface Relation extends BaseEntity {
  fromId: string;
  toId: string;
  type: string;
}

export interface SyncQueueItem extends BaseEntity {
  entityId: string;
  entityType: string;
  operation: "create" | "update" | "delete";
  status: "pending" | "synced" | "failed";
}
