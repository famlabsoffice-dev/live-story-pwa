import type { Table } from "dexie";

import type { BaseEntity } from "../database/schema";

export class BaseRepository<T extends BaseEntity> {
  constructor(protected readonly table: Table<T, string>) {}

  findById(id: string) {
    return this.table.get(id);
  }

  getAll() {
    return this.table.toArray();
  }

  create(entity: T) {
    return this.table.add(entity);
  }

  update(id: string, changes: Partial<T>) {
    return this.table.update(id, changes);
  }

  delete(id: string) {
    return this.table.delete(id);
  }
}
