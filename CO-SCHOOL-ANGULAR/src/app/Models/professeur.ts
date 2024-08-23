import { Examen } from "./examen";
import { Person } from "./person";

export interface Professeur extends Person {
  examens?: Examen[];
}
