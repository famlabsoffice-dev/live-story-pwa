export type MediaRelationType = 'chapter' | 'memory' | 'person';

export interface MediaRelation {
  mediaId: string;
  targetId: string;
  type: MediaRelationType;
}

export class MediaLinkService {
  private relations: MediaRelation[] = [];

  add(relation: MediaRelation) {
    this.relations.push(relation);
    return relation;
  }

  find(targetId: string) {
    return this.relations.filter((r) => r.targetId === targetId);
  }
}
