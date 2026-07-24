import { db } from "../database";
import type { Person } from "../database/schema";
import { BaseRepository } from "./baseRepository";

export class PersonRepository extends BaseRepository<Person> {
  constructor() {
    super(db.persons);
  }
}

export const personRepository = new PersonRepository();
