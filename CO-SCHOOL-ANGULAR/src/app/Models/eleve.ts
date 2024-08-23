import { ExamenEleve } from "./examenEleve";
import { Person } from "./person";

export interface Eleve extends Person {
  examenEleves?: ExamenEleve[];
}
